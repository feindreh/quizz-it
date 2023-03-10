import {getFirestore,collection, addDoc,getDocs,doc ,setDoc} from "firebase/firestore";



import app from "../app";

const db = getFirestore(app);

export default async function saveQuizz(quizz,name,id){
  try{
    console.log("save")
    await setDoc(doc(db,"quizz",id),{
      quizz:quizz,
       name:name,
       id:id
      })
  } catch(e){
    console.error("Error saving Quizz:",e)
  }
}

// export default async function saveQuizz(quizz,name){
//   try{
//     console.log("save")
//     await addDoc(collection(db,"quizz"),{
//       quizz:quizz,
//       name:name,
//       id:uniqid()
//     });
//   } catch(e){
//       console.error("Error saving Quizz:",e)
//   }
// }

export async function getQuizz(){
  console.log("read")
  const quizzes = await getDocs(collection(db, "quizz"));

  const quizArray = []
  quizzes.forEach((quis) => {
      quizArray.push(quis.data())
  })
  return quizArray
}