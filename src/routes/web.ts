import { Router } from "express";
import path from "path";

const webRouter = Router();

webRouter.get("/",(req,res)=>{
    console.log(__dirname)
    return res.sendFile(path.join(__dirname,"../public/index.html"))
    //return res.send("<h1>Paolo</h1>")
})

export default webRouter;