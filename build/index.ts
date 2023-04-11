import express, { Request, Response } from "express";
import * as FB from "../db/conndb.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended : false}));

app.get("/", (req: Request, res: Response) => {
    res.send("/ 노드몬다시보기");
    console.log('메인');
});

app.get("/getPostData", async (req: Request, res: Response) => {
    let postType: string = "Users";
    let postID: string = "육영현";
    let resultData: object = await FB.getFBPostData(postType, postID);
    
    res.send(resultData);
});

app.get("/putDB", async (req: Request, res: Response) => {
    let col: string = "cities";
    let docname: string = "LA";
    await FB.putDB(col, docname);
});


app.listen(8080, () => {
    console.log("Server is Listening on Port 8080!");
});