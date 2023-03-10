import "./pickQuizz.css"
import QuizzPick from "./quizzPick"

function PickQuizz(props){

    const {feature,quizzes} = props

    return(
        <div>
            {quizzes.map((quizz,id)=><QuizzPick key={id} quizz={quizz} feature={feature}/>)}
        </div>
    )
}

export default PickQuizz