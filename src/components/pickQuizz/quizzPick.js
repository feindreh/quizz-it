import { Link } from "react-router-dom"

function QuizzPick(props){
    const {quizz,feature} = props

    const text = getText(feature)

    return (
            <div className="pickWrap">
                <div className = "quizzPick-name">{quizz.name}</div>
                <Link to={`/quizz-it/${feature}/${quizz.id}`}><button type="button">{text}</button></Link>
            </div>
    )
}

function getText(feat){
    switch(feat){
        case "play":
            return "Dieses Quizz Spielen";
        case "edit":
            return "Dieses Quizz bearbeiten"
        default:
            console.error("undefined feature")

    }
}

export default QuizzPick