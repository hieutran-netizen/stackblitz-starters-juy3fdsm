import { createHTTPServer } from "@trpc/server/adapters/standalone";
import { appRouter } from "./src/router";
import { createContext } from "./context";
createHTTPServer({
  router: appRouter,
  createContext,
  basePath: "/trpc/",
}).listen(2022);
console.log("Bat dau tai http://localhost:2022/trpc");
