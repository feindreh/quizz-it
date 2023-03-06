
import React,{ Component } from "react";
import { Routes, Route, Link } from "react-router-dom";

import Home from "./components/home";
import Quizz from "./components/quizz";
import MakeQuizz from "./components/makeQuizz";


function App(){
  return(
    <Routes>
      <Route path="/" element ={<Home/>}/>
      <Route path="/play" element={<Quizz/>}/>
      <Route path="/pick" element={<div>Pick</div>}/>
      <Route path="/create" element ={<MakeQuizz/>}/>
    </Routes>
  )
}

export default App