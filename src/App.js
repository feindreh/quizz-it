
import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./components/home";
import Quizz from "./components/play/quizz";
import MakeQuizz from "./components/makeQuizz/makeQuizz";
import PickQuizz from "./components/pickQuizz/pickQuizz";

function App(){

  return(
    <div>
      <Routes>
        <Route path="/quizz-it/" element ={<Home/>}/>
        <Route path="/quizz-it/play/:id" element={<Quizz/>}/>
        <Route path="/quizz-it/create" element ={<MakeQuizz/>}/>
        <Route path="/quizz-it/pick" element={<PickQuizz feature={"play"}/>}/>
        <Route path="/quizz-it/edit" element={<PickQuizz feature={"edit"}/>}></Route>
        <Route path="/quizz-it/edit/:id" element={<MakeQuizz/>}/>
      </Routes>
    </div>
  )
}

export default App