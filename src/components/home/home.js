import { Link } from "react-router-dom"
import "./home.css"

function Home(){
    return(
        <div id="home">
            <div id="homewrap">
                <Link to={"/pick"}>
                    <button type="button">Quizz Spielen</button>
                </Link>
                <Link to={"/create"}>
                    <button type="button">Quizz erstellen</button>
                </Link>
                <Link to={"/edit"}>
                    <button type="button">Quizz bearbeiten</button>
                </Link>
                <Link to={"/share"}>
                    <button type="button">Quizz Teilen</button>
                </Link>
            </div>
        </div>
    )
}

export default Home