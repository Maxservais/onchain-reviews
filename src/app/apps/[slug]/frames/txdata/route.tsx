import { SchemaEncoder } from "@ethereum-attestation-service/eas-sdk";
import { TransactionTargetResponse } from "frames.js";
import { getFrameMessage } from "frames.js/next/server";
import { NextRequest, NextResponse } from "next/server";
import { Abi, encodeFunctionData } from "viem";

import { easABI } from "@/abis/eas";
import { easContractAddress, easReviewSchema } from "@/config/eas";

export async function POST(
  req: NextRequest
): Promise<NextResponse<TransactionTargetResponse>> {
  const json = await req.json();

  const frameMessage = await getFrameMessage(json);

  const score: number = JSON.parse(frameMessage?.state as string).score;
  const name: number = JSON.parse(frameMessage?.state as string).appName;

  const review = frameMessage?.inputText as string;

  if (!frameMessage) {
    throw new Error("No frame message");
  }

  const schemaEncoder = new SchemaEncoder(
    "string appName,uint8 score,string appReview"
  );

  const encodedData = schemaEncoder.encodeData([
    { name: "appName", value: name, type: "string" },
    { name: "score", value: score, type: "uint8" },
    { name: "appReview", value: review, type: "string" },
  ]);

  const calldata = encodeFunctionData({
    abi: easABI,
    functionName: "attest",
    args: [
      {
        schema: easReviewSchema,
        data: {
          recipient: "0x0000000000000000000000000000000000000000",
          data: encodedData as `0x${string}`,
          revocable: true,
          expirationTime: BigInt(0),
          refUID:
            "0x0000000000000000000000000000000000000000000000000000000000000000",
          value: BigInt(0),
        },
      },
    ],
  });

  return NextResponse.json({
    chainId: "eip155:10", // OP Mainnet
    method: "eth_sendTransaction",
    params: {
      abi: easABI as Abi,
      to: easContractAddress,
      data: calldata,
      value: "0",
    },
  });
}
