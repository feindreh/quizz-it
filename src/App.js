
import React,{ Component } from "react";
import { Routes, Route, Link } from "react-router-dom";

import Home from "./components/home";
import Quizz from "./components/quizz";
import MakeQuizz from "./components/makeQuizz/makeQuizz";
import Edit from "./components/edit";
import PickQuizz from "./components/pickQuizz/pickQuizz";

import { getQuizz } from "./firebase/firestore/firestore";
import { useState,useEffect } from "react";

function App(){

  const [quizzes,setQuizzes] = useState([])

    useEffect(()=>{
        getQuizz().then((resolve)=>setQuizzes(resolve))
    },[])

  return(
    <Routes>
      <Route path="/" element ={<Home/>}/>
      <Route path="/play/:id" element={<Quizz/>}/>
      <Route path="/pick" element={<PickQuizz quizzes={quizzes}/>}/>
      <Route path="/create" element ={<MakeQuizz/>}/>
      <Route path="/edit" element={<Edit/>}/>
    </Routes>
  )
}

export default App