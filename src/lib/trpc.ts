import { initTRPC } from "@trpc/server";
import { Context } from "../../context";
import createMyPlugin from "../middleware";

const plugin = createMyPlugin();
export const t = initTRPC.context<Context>().create();
export const router = t.router;
const procedure = t.procedure;
export const authProcudure = procedure.concat(plugin.auth);
