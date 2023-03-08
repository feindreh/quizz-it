import {useState} from "react"
import { useParams } from "react-router-dom"
import saveQuizz from "../../firebase/firestore/firestore"
import "./makeQuizz.css"
import NewQuestion from "./newQuestion"

function MakeQuizz(props){

    const {id} = useParams() 
    const {quizzes} = props

    function getNewQuizz(){
        //if no params return empty array else return quizz to edit
        if(id===undefined){
            return []
        }else{
            for(let key in quizzes){
                if(quizzes[key].id === id){
                    const newArray = []
                    for(let subkey in quizzes[key].quizz){
                        newArray.push(quizzes[key].quizz[subkey])
                    }
                    return newArray
                }
            }
        }
    }

    function getNewName(){
         //if no params return empty string else return name to edit
        if(id===undefined){
            return ""
        }else{
            for(let key in quizzes){
                if(quizzes[key].id === id){
                    return quizzes[key].name
                }
            }
        }
    }

    const [newQuizz,setNewQuizz] = useState(getNewQuizz())
    const [name,setName] = useState(getNewName())

    

    async function saveIT(){
        const newObj = {}

        for(let key in newQuizz){
            newObj[key] = newQuizz[key]
        }  
        saveQuizz(newObj,name,id);
        setNewQuizz([]);
        setName("")

    }

    console.log(newQuizz)

    return(
        <div id="quizzMaker">
            <div>makeQuizz</div>
            <button type="button" onClick={saveIT}>Speichern</button>
            <label>Name des Quizzes</label><input type = "text" defaultValue={name} onChange={(e)=>{setName(e.target.value)}}></input>
            
            {newQuizz.map((question,a)=><NewQuestion key={a} number={a} Question={question}/>)}

            <button onClick={()=>{setNewQuizz([...newQuizz,{}])}}>Neue Frage</button>

        </div>
    )
}

export default MakeQuizz