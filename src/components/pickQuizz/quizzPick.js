import { Link } from "react-router-dom"

function QuizzPick(props){
    const {quizz} = props
    console.log(quizz)
    return (
        <div className = "quizzPick">
            <div className="pickWrap">
                <div className = "quizzPick-name">{quizz.name}</div>
                <Link to={`/play/${quizz.id}`}><button type="button">Dieses Quizz Spielen</button></Link>
            </div>
        </div>
    )
}

export default QuizzPick