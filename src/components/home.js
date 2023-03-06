import { Link } from "react-router-dom"

function Home(){
    return(
        <div id="home">
            <Link to={"/play"}>
                <button type="button">Quizz It!</button>
            </Link>
            <Link to={"/pick"}>
                <button type="button">Quizz wählen</button>
            </Link>
            <Link to={"/create"}>
                <button type="button">Quizz erstellen</button>
            </Link>
            <Link to={"/edit"}>
                <button type="button">Quizz bearbeiten</button>
            </Link>
        </div>
    )
}

export default Home