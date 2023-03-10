
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
        <Link to="/">Home</Link>
      </div>
      <Routes>
        <Route path="/" element ={<Home/>}/>
        <Route path="/play/:id" element={<Quizz quizzes={quizzes}/>}/>
        <Route path="/create" element ={<MakeQuizz quizzes={quizzes} load={load} />}/>
        <Route path="/pick" element={<PickQuizz quizzes={quizzes}  feature={"play"}/>}/>
        <Route path="/edit" element={<PickQuizz quizzes={quizzes}  feature={"edit"}/>}></Route>
        <Route path="/edit/:oldId" element={<MakeQuizz quizzes={quizzes} load={load}/>}/>
      </Routes>
    </div>
  )
}

export default App