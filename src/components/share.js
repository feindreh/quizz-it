import { useParams } from "react-router-dom";

function Share(){

    const {id} = useParams()

    return (
        <div>
        <div style={{"font-size":"30px","margin-bottom":"20px"}}>Link zum Quizz:</div>
        <div>{`https://feindreh.github.io/quizz-it#/play/${id}`}</div>
        </div>
    )
}

export default Share

