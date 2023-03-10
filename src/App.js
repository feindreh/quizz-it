
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./components/home/home";
import Quizz from "./components/play/quizz";
import MakeQuizz from "./components/makeQuizz/makeQuizz";
import PickQuizz from "./components/pickQuizz/pickQuizz";

import { useEffect } from "react";

import { getQuizz } from "./firebase/firestore/firestore";
import { Link } from "react-router-dom";
import "./App.css"

function App(){

const [quizzes,setQuizzes] = useState([])

  useEffect(()=>{
    load()
 },[])

 async function load(){
  await getQuizz().then((resolve)=>{
      setQuizzes(resolve);
  })
  
}
  return(
    <div id="App">
      <div id="Appwrap">
        <div id="logo">Quizz It !</div>
        <Link to="/quizz-it">Home</Link>
      </div>
      <Routes>
        <Route path="/quizz-it/" element ={<Home/>}/>
        <Route path="/quizz-it/play/:id" element={<Quizz quizzes={quizzes}/>}/>
        <Route path="/quizz-it/create" element ={<MakeQuizz quizzes={quizzes} load={load} />}/>
        <Route path="/quizz-it/pick" element={<PickQuizz quizzes={quizzes}  feature={"play"}/>}/>
         <Route path="/quizz-it/edit" element={<PickQuizz quizzes={quizzes}  feature={"edit"}/>}></Route>
        <Route path="/quizz-it/edit/:oldId" element={<MakeQuizz quizzes={quizzes} load={load}/>}/>
      </Routes>
    </div>
  )
}

export default App