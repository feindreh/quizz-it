import { Link } from "react-router-dom"

function Home(){
    return(
        <div id="home">
            <Link to={"/quizz-it/pick"}>
                <button type="button">Quizz Spielen</button>
            </Link>
            <Link to={"/quizz-it/create"}>
                <button type="button">Quizz erstellen</button>
            </Link>
            <Link to={"/quizz-it/edit"}>
                <button type="button">Quizz bearbeiten</button>
            </Link>
        </div>
    )
}

export default Home