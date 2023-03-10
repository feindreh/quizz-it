import { Link } from "react-router-dom"
import "./home.css"

function Home(){
    return(
        <div id="home">
            <div id="homewrap">
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
        </div>
    )
}

export default Home