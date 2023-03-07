import {getFirestore,collection, addDoc,getDocs } from "firebase/firestore";
import uniqid from "uniqid"



import app from "../app";

const db = getFirestore(app);

  export default async function saveQuizz(quizz,name){
    try{
      console.log("save")
      await addDoc(collection(db,"quizz"),{
        quizz:quizz,
        name:name,
        id:uniqid()
      });
    } catch(e){
      console.error("Error saving Quizz:",e)
    }
  }

  export async function getQuizz(){
    console.log("read")
    const quizzes = await getDocs(collection(db, "quizz"));
    
    const quizArray = []
    quizzes.forEach((quis) => {
        quizArray.push(quis.data())
    })
    return quizArray
  }