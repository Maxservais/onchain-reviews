/* eslint-disable react/jsx-key */
import { Button } from "frames.js/next";

import { client } from "@/app/_trpc/client";
import { backgroundTask } from "@/lib/process/processReviews";

import { frames } from "../frames";

const handleRequest = frames(async (ctx) => {
  const appSlug = ctx.url.pathname.split("/")[2];

  const app = await client.appsRouter.getApp.query({ appSlug: appSlug });

  const score = ctx.searchParams.score;
  const finalState = {
    appName: app?.name ?? appSlug,
    score: score,
  };

  if (ctx.message?.transactionId) {
    backgroundTask(appSlug);

    return {
      image: (
        <div tw="flex w-full h-full">
          <div tw="flex flex-col w-full h-full px-[80px] py-[70px] items-start justify-center">
            <div tw="flex mt-auto w-full flex-col">
              <div tw="flex text-[64px] mb-7 font-bold">
                Thanks for sharing your review!
              </div>
              <div tw="flex text-[36px] font-normal">
                Feel free to review any other app you liked (or disliked)!
              </div>
            </div>
          </div>
        </div>
      ),
      buttons: [
        <Button
          action="link"
          target={`${process.env.NEXT_PUBLIC_APP_URL}/apps/${appSlug}`}
        >
          View all reviews
        </Button>,
      ],
    };
  }

  return {
    image: (
      <div tw="flex w-full h-full">
        <div tw="flex flex-col w-full h-full px-[80px] py-[70px] items-start justify-center">
          <div tw="flex mt-auto w-full flex-col">
            <div tw="flex text-[64px] mb-7 font-bold">
              Want to tell us more about {app?.name}?
            </div>
            <div tw="flex text-[36px] font-normal">
              Share a bit more about your experience with {app?.name}!
              Submitting will trigger a tx and cost a few cents in gas.
            </div>
          </div>
        </div>
      </div>
    ),
    textInput: `Write a review for ${appSlug}`,
    buttons: [
      <Button action="post" target={`/apps/${appSlug}/frames`}>
        Go back
      </Button>,
      <Button
        action="tx"
        target={{
          pathname: `/apps/${appSlug}/frames/txdata`,
        }}
        post_url={`/apps/${appSlug}/frames/review`}
      >
        Confirm review
      </Button>,
    ],
    state: finalState,
  };
});

export const GET = handleRequest;
export const POST = handleRequest;
