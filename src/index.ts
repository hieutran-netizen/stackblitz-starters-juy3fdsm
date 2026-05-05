import { createHTTPServer } from '@trpc/server/adapters/standalone';
import { appRouter } from './appRouter';
createHTTPServer({
  router: appRouter,
  createContext() {
    return {};
  },
  basePath: '/trpc/',
}).listen(2022);
