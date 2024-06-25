import * as trpcNext from "@trpc/server/adapters/next";

export async function createContext() {
  // Create your context based on the request object
  //   Will be available as `ctx` in all your resolvers
  //   This is just an example of something you might want to do in your ctx fn
  async function getUserFromHeader() {
    return null;
  }
  const user = await getUserFromHeader();
  return {
    user,
  };
}
export type Context = Awaited<ReturnType<typeof createContext>>;
