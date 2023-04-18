import express, { Request, Response } from "express";
import * as FB from "../db/conndb.js";

const app = express();
const cors = require('cors');
app.use(express.json());
app.use(express.urlencoded({extended : false}));

app.use(cors({
    origin: '*',
    credentials: true, // 응답 헤더에 Access-Control-Allow-Credentials 추가
    optionsSuccessStatus: 200, // 응답 상태 200으로 설정
}));


app.get("/", (req: Request, res: Response) => {
    res.send("/ 노드몬다시보기");
    console.log('메인');
});



app.post("/getPostData", async (req: Request, res: Response) => {
    let postType: string = "Users";
    let postID: string = "육영현";
    let resultData: object = await FB.getFBPostData(postType, postID);
    
    res.send(resultData);
    console.log("겟멤")
});

app.get("/getGetData", async (req: Request, res: Response) => {
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


app.listen(3000, () => {
    console.log("Server is Listening on Port 3000!");
    //haren-dev.defcon.or.kr 도메인은 이 서버의 3000 포트다....
    //8080포트는 이 VSCode가 돌아가고 있는 포트다...
});
