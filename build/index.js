"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const FB = __importStar(require("../db/conndb.js"));
const app = (0, express_1.default)();
const cors = require('cors');
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(cors({
    origin: '*',
    credentials: true,
    optionsSuccessStatus: 200, // 응답 상태 200으로 설정
}));
app.get("/", (req, res) => {
    res.send("/ 노드몬다시보기");
    console.log('메인');
});
app.post("/getPostData", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let postType = "Users";
    let postID = "육영현";
    let resultData = yield FB.getFBPostData(postType, postID);
    res.send(resultData);
    console.log("겟멤");
}));
app.get("/getGetData", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let postType = "Users";
    let postID = "육영현";
    let resultData = yield FB.getFBPostData(postType, postID);
    res.send(resultData);
}));
app.get("/putDB", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let col = "cities";
    let docname = "LA";
    yield FB.putDB(col, docname);
}));
app.listen(3000, () => {
    console.log("Server is Listening on Port 3000!");
    //haren-dev.defcon.or.kr 도메인은 이 서버의 3000 포트다....
    //8080포트는 이 VSCode가 돌아가고 있는 포트다...
});
