import { Router } from "express";
import userRoutes from "./user-routes.js";
import chatRoutes from "./chat-routes.js";
const appRouter = Router();
appRouter.use("/user", userRoutes); //domin/api/v1/user
appRouter.use("/chat", chatRoutes); //domin/api/v1/chats
export default appRouter;
//# sourceMappingURL=index.js.map