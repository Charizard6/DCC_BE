import {FirebaseApp, FirebaseOptions, initializeApp} from "firebase/app";
import {setDoc, collection, doc, Firestore, getDoc, getDocs, getFirestore, orderBy, query} from "firebase/firestore";
import dotenv from "dotenv";


dotenv.config();
const firebaseConfig = {
    apiKey: process.env.FB_API_KEY,
    authDomain: process.env.FB_AUTH_DOMAIN,
    projectId: process.env.FB_PROJECT_ID,
    appId: process.env.FB_APP_ID
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const getFBPostData =async (collect : string, documen: string) => {
    let resultData ={
        Country_1:"",
        name: "",
        state: ""
    };
    try{
        const postDocData = await getDoc(doc(db, collect, documen));
        if(postDocData.exists()){
            resultData.Country_1 = postDocData.data().country;
            resultData.name = postDocData.data().name;
            resultData.state = postDocData.data().state;
        }else{
            resultData.Country_1 = "없어요";
            resultData.name = "없어요";
        }
    }catch(error){
        resultData.Country_1 = "캣치문";
        resultData.name = "캐치문";
    }
    return resultData;
};
export const putDB =async (col:string, docname:string) => {
    let resultData ={
        country:"USA",
        name: "LA",
        state: "state of LA"
    };
    try{
        await setDoc(doc(db,col,docname),resultData);
    }catch(error){
        console.log(error);
    }
};
