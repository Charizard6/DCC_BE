"use strict";
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
exports.putDB = exports.getFBPostData = void 0;
const app_1 = require("firebase/app");
const firestore_1 = require("firebase/firestore");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const firebaseConfig = {
    apiKey: process.env.FB_API_KEY,
    authDomain: process.env.FB_AUTH_DOMAIN,
    projectId: process.env.FB_PROJECT_ID,
    appId: process.env.FB_APP_ID
};
const app = (0, app_1.initializeApp)(firebaseConfig);
const db = (0, firestore_1.getFirestore)(app);
const getFBPostData = (collect, documen) => __awaiter(void 0, void 0, void 0, function* () {
    let resultData = {
        Country_1: "",
        name: "",
        state: ""
    };
    try {
        const postDocData = yield (0, firestore_1.getDoc)((0, firestore_1.doc)(db, collect, documen));
        if (postDocData.exists()) {
            resultData.Country_1 = postDocData.data().country;
            resultData.name = postDocData.data().name;
            resultData.state = postDocData.data().state;
        }
        else {
            resultData.Country_1 = "없어요";
            resultData.name = "없어요";
        }
    }
    catch (error) {
        resultData.Country_1 = "캣치문";
        resultData.name = "캐치문";
    }
    return resultData;
});
exports.getFBPostData = getFBPostData;
const putDB = (col, docname) => __awaiter(void 0, void 0, void 0, function* () {
    let resultData = {
        country: "USA",
        name: "LA",
        state: "state of LA"
    };
    try {
        yield (0, firestore_1.setDoc)((0, firestore_1.doc)(db, col, docname), resultData);
    }
    catch (error) {
        console.log(error);
    }
});
exports.putDB = putDB;
