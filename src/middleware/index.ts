import { initTRPC, TRPCError } from "@trpc/server";
import type { Context } from "../../context";

export default function createMyPlugin() {
  const t = initTRPC.context<Context>().create();

  return {
    auth: t.procedure.use(async (opts) => {
      return opts.next({
        ctx: {
          account: { id: 123 },
        },
      });
    }),
  };
}
