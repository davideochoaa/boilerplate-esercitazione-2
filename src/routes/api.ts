import { Router } from "express";
import fs from "fs/promises";
import path from "path";

const apiRouter= Router();

apiRouter.get("/",(req,res)=>{
    return res.status(200).json({
        test: "GET"
    })
})


apiRouter.post("/",(req,res)=>{

    const body= req.body;
    console.log(body);

    return res.status(200).json({
        test: "POST"
    })
})

apiRouter.get("/users", async (req,res) =>{
    console.log(__dirname);
    const users = await fs.readFile(path.join(__dirname, "../public/users.txt"), "utf8");
    const usersParsed = JSON.parse(users);
    console.log(users);
    return res.json({users: usersParsed});
})

export default apiRouter;