import {useState} from "react"
import saveQuizz from "../../firebase/firestore/firestore"
import "./makeQuizz.css"
import NewQuestion from "./newQuestion"

function MakeQuizz(){

    const [newQuizz,setNewQuizz] = useState([])
    const [name,setName] = useState("")

    async function saveIT(){
        const newObj = {}

        for(let key in newQuizz){
            newObj[key] = newQuizz[key]
            newObj.name = name
        }
        saveQuizz(newObj,name);
        setNewQuizz([]);
        setName("")

    }


    return(
        <div id="quizzMaker">
            <div>makeQuizz</div>
            <button type="button" onClick={saveIT}>Speichern</button>
            <label>Name des Quizzes</label><input type = "text" onChange={(e)=>{setName(e.target.value)}}></input>
            
            {newQuizz.map((question,a)=><NewQuestion key={a} number={a} Question={question}/>)}

            <button onClick={()=>{setNewQuizz([...newQuizz,{}])}}>Neue Frage</button>

        </div>
    )
}

export default MakeQuizz