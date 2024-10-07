import {
  EAS,
  EIP712AttestationParams,
} from "@ethereum-attestation-service/eas-sdk";
import slugify from "@sindresorhus/slugify";
import { getClient, getConnectorClient } from "@wagmi/core";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { Dispatch, SetStateAction } from "react";
import {
  Abi,
  Chain,
  createPublicClient,
  encodeAbiParameters,
  getAddress,
  http,
  parseAbiParameters,
} from "viem";
import {
  simulateContract,
  waitForTransactionReceipt,
  writeContract,
} from "viem/actions";
import { useAccount, useBalance } from "wagmi";
import { base, mainnet, optimism, optimismSepolia } from "wagmi/chains";

import { easABI } from "@/abis/eas";
import { client } from "@/app/_trpc/client";
import { App, Status } from "@/app/new-review/[slug]/NewReview";
import { NO_EXPIRATION, ZERO_ADDRESS, ZERO_BYTES32 } from "@/config/constants";
import { easContractAddress, easReviewSchema } from "@/config/eas";
import { useEthersSigner } from "@/hooks/useEthersSigner";
import { isFarcasterUser, scrollToTop } from "@/lib/utils";
import connectWallet from "@/lib/wallet/connectWallet";

import { config } from "../../../../wagmi.config";
import { backgroundTask } from "../../../lib/process/processReviews";
import RatingForm, { IFormInput } from "../RatingForm";

const eas = new EAS(easContractAddress);

export default function Rating({
  app,
  reviewStatus,
  setNewAttestationUID,
  setReviewStatus,
  setError,
}: {
  app: App;
  reviewStatus: Status;
  setNewAttestationUID: (uid: string) => Promise<void>;
  setReviewStatus: (status: Status) => Promise<void>;
  setError: (error: string) => Promise<void>;
}) {
  const { address, status: walletStatus, chainId, connector } = useAccount();
  const { open: openWallet } = useWeb3Modal();
  const signer = useEthersSigner();

  const { data: optimismBalance } = useBalance({
    address,
    chainId: optimism.id,
  });

  const { data: baseBalance } = useBalance({
    address,
    chainId: base.id,
  });

  const getPreferredChain = (): Chain => {
    const isDev = process.env.NODE_ENV === "development";
    if (isDev) return optimismSepolia;

    const hasOptimismBalance =
      optimismBalance && optimismBalance.value > BigInt(0);
    const hasBaseBalance = baseBalance && baseBalance.value > BigInt(0);

    if (hasOptimismBalance) return optimism;
    if (hasBaseBalance) return base;
    return chainId === base.id ? base : optimism; // Prefer current chain if it's Base, otherwise default to Optimism
  };

  // Function to handle wallet connection
  async function handleConnectWallet() {
    const preferredChain = getPreferredChain();
    const { success } = await connectWallet(
      walletStatus,
      openWallet,
      preferredChain
    );
    return success;
  }

  // Function to handle transaction signing
  async function handleTransactionSigning(data: IFormInput, chainId: number) {
    try {
      setReviewStatus("inProgress");
      const publicClient = await getClient(config);
      const walletClient = await getConnectorClient(config);

      const encodedData = encodeAbiParameters(
        parseAbiParameters("string appName,uint8 score,string appReview"),
        [app.name, data.score, data.review]
      );

      const publicClientEth = createPublicClient({
        chain: mainnet,
        transport: http(),
      });
      const ensName = await publicClientEth.getEnsName({
        address: address as `0x${string}`,
      });

      const isFarcaster = isFarcasterUser(connector);

      /* User signs and pays for gas himself */
      /* --------------------------------------------------------- */
      if (!ensName && !isFarcaster) {
        let hash;

        if (!publicClient) {
          throw new Error("Public client is not initialized");
        }

        const { request } = await simulateContract(publicClient, {
          address: easContractAddress,
          abi: easABI as Abi,
          functionName: "attest",
          args: [
            {
              schema: easReviewSchema,
              data: {
                recipient: ZERO_ADDRESS,
                expirationTime: BigInt(0),
                revocable: true,
                refUID: ZERO_BYTES32,
                data: encodedData as `0x${string}`,
                value: BigInt(0),
              },
            },
          ],
          account: address,
        });

        hash = await writeContract(walletClient, request);

        setReviewStatus("confirming");

        const transaction = await waitForTransactionReceipt(publicClient, {
          hash: hash as `0x${string}`,
        });

        const attestationLog = transaction.logs.find(
          (log) => log.address === easContractAddress
        );

        if (attestationLog) {
          setNewAttestationUID(attestationLog.data);
          setReviewStatus("success");
          scrollToTop();

          await backgroundTask(slugify(app.name));

          return true;
        } else {
          setReviewStatus("error");
          scrollToTop();
          return false;
        }
      } else {
        /* User signs and we pay for gas */
        /* --------------------------------------------------------- */
        eas.connect(signer!);

        const delegatedSigner = await eas.getDelegated();
        const easnonce = await eas.getNonce(address as string);

        const attestation: EIP712AttestationParams = {
          schema: easReviewSchema as `0x${string}`,
          recipient: ZERO_ADDRESS,
          data: encodedData as `0x${string}`,
          revocable: true,
          expirationTime: NO_EXPIRATION,
          refUID: ZERO_BYTES32 as `0x${string}`,
          value: BigInt(0),
          deadline: NO_EXPIRATION,
          nonce: easnonce,
        };

        const res = await delegatedSigner.signDelegatedAttestation(
          attestation,
          signer!
        );

        const dataToSend = {
          ...attestation,
          signature: res.signature,
          attester: (await getAddress(address!)) as `0x${string}`,
          chainId: chainId,
          appSlug: slugify(app.name),
        };

        const responseData = await client.signRouter.delegateSign.mutate(
          dataToSend
        );

        if (responseData.success && responseData.attestationUID) {
          setNewAttestationUID(responseData.attestationUID);
          setReviewStatus("success");
          scrollToTop();

          return true;
        } else {
          setReviewStatus("error");
          setError(responseData.error ? responseData.error : "Unknown error");
          scrollToTop();
          return false;
        }
      }
    } catch (e) {
      setReviewStatus("rating");
      scrollToTop();
      console.error("Failed transaction:", e);
      return false;
    }
  }

  const onSubmit = async (data: IFormInput) => {
    const isDev = process.env.NODE_ENV === "development";
    const supportedChains: number[] = isDev
      ? [optimismSepolia.id]
      : [optimism.id, base.id];

    if (!address || !chainId || !supportedChains.includes(chainId)) {
      const success = await handleConnectWallet();
      if (!success) return;
    }

    if (address && chainId && supportedChains.includes(chainId)) {
      await handleTransactionSigning(data, chainId);
    }
  };

  return (
    <>
      <div className="pt-6 text-left">
        <h3 className="text-2xl font-semibold leading-9 text-gray-900">
          Review {app?.name}
        </h3>
      </div>
      <RatingForm
        app={app}
        reviewStatus={reviewStatus}
        walletStatus={walletStatus}
        onSubmit={onSubmit}
        openWallet={openWallet}
        setReviewStatus={setReviewStatus}
        preferredChain={getPreferredChain()}
      />
    </>
  );
}
