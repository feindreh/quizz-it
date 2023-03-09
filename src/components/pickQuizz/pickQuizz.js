import "./pickQuizz.css"
import { getQuizz } from "../../firebase/firestore/firestore"
import { useEffect, useState } from "react"
import QuizzPick from "./quizzPick"

function PickQuizz(props){

    const {feature} = props

    const [quizzes,setQuizzes] = useState([])

    useEffect(()=>{
        getQuizz().then((resolve)=>setQuizzes(resolve))
    },[])


    return(
        <div>
            {quizzes.map((quizz,id)=><QuizzPick key={id} quizz={quizz} feature={feature}/>)}
        </div>
    )
}

export default PickQuizz