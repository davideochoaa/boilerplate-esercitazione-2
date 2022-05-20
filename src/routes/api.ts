import { Router } from "express";

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

export default apiRouter;