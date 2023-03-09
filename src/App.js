
import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./components/home";
import Quizz from "./components/play/quizz";
import MakeQuizz from "./components/makeQuizz/makeQuizz";
import PickQuizz from "./components/pickQuizz/pickQuizz";

function App(){

  return(
    <Routes>
      <Route path="/" element ={<Home/>}/>
      <Route path="/play/:id" element={<Quizz/>}/>
      <Route path="/create" element ={<MakeQuizz/>}/>
      <Route path="/pick" element={<PickQuizz feature={"play"}/>}/>
      <Route path="/edit" element={<PickQuizz feature={"edit"}/>}></Route>
      <Route path="/edit/:id" element={<MakeQuizz/>}/>
    </Routes>
  )
}

export default App