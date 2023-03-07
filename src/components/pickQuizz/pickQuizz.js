import "./pickQuizz.css"
import { getQuizz } from "../../firebase/firestore/firestore"
import { useEffect, useState } from "react"
import QuizzPick from "./quizzPick"

function PickQuizz(props){

    const {quizzes,feature} = props


    return(
        <div>
            {quizzes.map((quizz,id)=><QuizzPick key={id} quizz={quizz} feature={feature}/>)}
        </div>
    )
}

export default PickQuizz