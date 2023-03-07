import "./pickQuizz.css"
import { getQuizz } from "../../firebase/firestore/firestore"
import { useEffect, useState } from "react"
import QuizzPick from "./quizzPick"

function PickQuizz(props){

    const {quizzes} = props


    return(
        <div>
            {quizzes.map((quizz,id)=><QuizzPick key={id} quizz={quizz}/>)}
        </div>
    )
}

export default PickQuizz