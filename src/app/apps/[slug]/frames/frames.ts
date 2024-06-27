import { createFrames } from "frames.js/next";
// import { types } from "frames.js/next";

// export async function myMiddleware(
//   ctx: any,
//   next: any
// ): Promise<types.FramesMiddleware<any, { slug: string }>> {
//   console.log(params?.slug);
//   return next({ slug: params?.slug });
// }

export const frames = createFrames({
  // basePath: "frames",
  // middleware: [myMiddleware],
});
