import RequireVerificationGuard from "../../guard/verify.guard";
import { authProcudure, router } from "../../lib/trpc";

const PostsRoute = router({
  list: authProcudure.use(RequireVerificationGuard).query(({ ctx }) => {
    console.log("ctx.", ctx.account);
    return { message: "ok" };
  }),
});
export default PostsRoute;
