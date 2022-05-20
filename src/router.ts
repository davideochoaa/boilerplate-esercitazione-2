import { Router } from "express";
import path from "path";
import apiRouter from "./routes/api";
import webRouter from "./routes/web";

const myRouter = Router();

// per api
myRouter.use("/api",apiRouter)

//per web
myRouter.use("/web",webRouter)








export default myRouter;