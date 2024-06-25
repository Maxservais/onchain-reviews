import { SimulateContractErrorType, WriteContractErrorType } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { getPublicClient, getWalletClient } from "../../../wagmi.config";
import { z } from "zod";

import { easABI } from "@/abis/eas";
import { easContractAddress } from "@/config/eas";
import { backgroundTask } from "@/lib/process/processReviews";

import { procedure, router } from "../trpc";

// Define regex patterns
const addressRegex = /^0x[a-fA-F0-9]{40}$/;
const bytes32Regex = /^0x[a-fA-F0-9]{64}$/;

// Address schema
const addressSchema = z
  .string()
  .regex(addressRegex, { message: "Invalid address format" })
  .transform((val) => val as `0x${string}`);

// Bytes32 schema
const bytes32Schema = z
  .string()
  .regex(bytes32Regex, { message: "Invalid bytes32 format" })
  .transform((val) => val as `0x${string}`);

const eip712SignatureSchema = z.object({
  v: z.number().int().min(0).max(255), // uint8
  r: bytes32Schema,
  s: bytes32Schema,
});

// Combine the components into the overall input schema
const delegatedAttestationRequestSchema = z.object({
  schema: bytes32Schema,
  recipient: addressSchema,
  expirationTime: z.bigint(),
  revocable: z.boolean(),
  refUID: bytes32Schema,
  data: z.string().transform((val) => val as `0x${string}`),
  deadline: z.bigint(),
  value: z.bigint(),
  signature: eip712SignatureSchema,
  attester: addressSchema,
  chainId: z.number(),
});

export const signRouter = router({
  delegateSign: procedure
    .input(delegatedAttestationRequestSchema)
    .mutation(async (opts) => {
      try {
        const {
          signature,
          attester,
          recipient,
          schema,
          refUID,
          data,
          deadline,
          value,
          expirationTime,
          chainId,
        } = opts.input;

        const publicClient = getPublicClient(chainId);
        const walletClient = getWalletClient(chainId);

        // load wallet that will pay gas fees
        const privateKey = process.env.PRIVATE_KEY;
        if (!privateKey) {
          console.error("PRIVATE_KEY is not set");
          throw new Error("PRIVATE_KEY is not set");
        }
        const backendWallet = privateKeyToAccount(privateKey as `0x${string}`); // new ethers.Wallet(privateKey, alchemyProvider);

        // put together the contract data
        const contractData = {
          schema: schema,
          data: {
            recipient: recipient,
            expirationTime: expirationTime,
            revocable: true,
            refUID: refUID,
            data: data,
            value: value,
          },
          signature: signature,
          attester: attester,
          deadline: deadline,
        };

        let hash;
        try {
          const { request } = await publicClient.simulateContract({
            address: easContractAddress,
            abi: easABI,
            functionName: "attestByDelegation",
            args: [contractData],
            account: backendWallet,
          });

          hash = await walletClient.writeContract(request);
        } catch (e) {
          // Handle errors during simulation and transaction sending
          const error = e as SimulateContractErrorType | WriteContractErrorType;

          if (error.name === "TransactionExecutionError") {
            console.error("Transaction execution error:", error.message);
            return {
              success: false,
              error: "Transaction execution error. " + error.message,
            };
          } else if (error.name === "ContractFunctionExecutionError") {
            console.error("Contract function execution error:", error.message);
            return {
              success: false,
              error: "Contract function execution error. " + error.message,
            };
          } else if (error.name === "AbiFunctionNotFoundError") {
            console.error("ABI function not found:", error.message);
            return {
              success: false,
              error: "ABI function not found. " + error.message,
            };
          } else if (error.name === "InvalidAddressError") {
            console.error("Invalid address:", error.message);
            return {
              success: false,
              error: "Invalid address. " + error.message,
            };
          } else {
            console.error("An unexpected error occurred:", error.message);
            return {
              success: false,
              error: "An unexpected error occurred. " + error.message,
            };
          }
        }

        const transaction = await publicClient.waitForTransactionReceipt({
          hash: hash as `0x${string}`,
        });

        const attestationLog = transaction.logs.find(
          (log) => log.address === easContractAddress
        );

        if (attestationLog) {
          backgroundTask();

          return {
            success: true,
            attestationUID: attestationLog.data,
            receipt: transaction,
          };
        } else {
          return { success: false, error: "Attestation failed" };
        }
      } catch (error) {
        return { success: false, error: "Internal Server error", status: 500 };
      }
    }),
});

export type SignRouter = typeof signRouter;
