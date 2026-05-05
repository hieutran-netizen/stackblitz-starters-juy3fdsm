import { TRPCError } from "@trpc/server";
import { t } from "../lib/trpc";

const RequireVerificationGuard = t.middleware((opts) => {
  const account = opts.ctx.account;
  if (!account.phoneVerified || !account.emailVerified) {
    throw new TRPCError({
      code: "FORBIDDEN",
      message: "Tài khoản chưa được xác minh",
    });
  }
  return opts.next();
});
export default RequireVerificationGuard;
