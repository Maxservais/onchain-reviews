/* eslint-disable react/jsx-key */
import { Button } from "frames.js/next";

import { client } from "@/app/_trpc/client";

import { frames } from "./frames";

const frameHandler = frames(async (ctx) => {
  const appSlug = ctx.url.pathname.split("/")[2];

  const app = await client.appsRouter.getApp.query({ appSlug: appSlug });

  return {
    image: (
      <div tw="flex w-full h-full">
        <div tw="flex flex-col w-full h-full px-[80px] py-[70px] items-start justify-center">
          <div tw="flex mt-auto w-full flex-col">
            <div tw="flex text-[64px] mb-7 font-bold">
              Do you like {app?.name}?
            </div>
            <div tw="flex text-[36px] font-normal">
              Help us build an onchain review system and tell us what you think
              about {app?.name}!
            </div>
          </div>
        </div>
      </div>
    ),
    buttons: [
      <Button
        action="post"
        target={{
          pathname: `/apps/${appSlug}/frames/review`,
          query: { score: "1" },
        }}
      >
        I hate it
      </Button>,
      <Button
        action="post"
        target={{
          pathname: `/apps/${appSlug}/frames/review`,
          query: { score: "3" },
        }}
      >
        It&apos;s meh
      </Button>,
      <Button
        action="post"
        target={{
          pathname: `/apps/${appSlug}/frames/review`,
          query: { score: "5" },
        }}
      >
        I love it
      </Button>,
    ],
  };
});

export const GET = frameHandler;
export const POST = frameHandler;
