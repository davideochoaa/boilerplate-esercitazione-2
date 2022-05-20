import  express from "express";
import router from "./router";
import bodyParser from "body-parser";
//npm run dev
const server = express();
//server.use(express.json());
server.use(bodyParser.json())
server.use("/",router);



export default server;