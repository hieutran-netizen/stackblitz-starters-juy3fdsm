import { router } from "./lib/trpc";
import PostsRoute from "./routes/posts/posts.route";

export const appRouter = router({
  posts: PostsRoute,
});
export type AppRouter = typeof appRouter;
