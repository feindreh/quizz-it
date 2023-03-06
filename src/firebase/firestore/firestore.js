import {getFirestore,collection, addDoc,getDocs } from "firebase/firestore";

import app from "../app";

const db = getFirestore(app);

  export default async function saveQuizz(quizz,name){
    try{
      console.log("save")
      await addDoc(collection(db,"quizz"),{
        quizz:quizz,
        name:name
      });
    } catch(e){
      console.error("Error saving Quizz:",e)
    }
  }

//   export async function getText(){
//     console.log("read")
//     const messages = await getDocs(collection(db, "text"));
    
//     const messagesArray = []
//     messages.forEach((mes) => {
//         messagesArray.push(mes.data())
//     })
//     return messagesArray
//   }