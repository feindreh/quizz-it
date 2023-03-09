import {useState,useEffect} from "react"
import { useParams } from "react-router-dom"
import saveQuizz from "../../firebase/firestore/firestore"
import "./makeQuizz.css"
import NewQuestion from "./newQuestion"
import { getQuizz } from "../../firebase/firestore/firestore"

function MakeQuizz(){



    const {id} = useParams() 
    const [newQuizz,setNewQuizz] = useState([])
    const [name,setName] = useState("")


    useEffect(()=>{
       load()
    },[])

    async function load(){
        await getQuizz().then((resolve)=>{
            setNewQuizz(getNewQuizz(resolve));
            setName(getNewName(resolve))
        })
        
    }

    function getNewQuizz(arr){
        //if no params return empty array else return quizz to edit
        if(id===undefined){
            return []
        }else{
            for(let key in arr){
                if(arr[key].id === id){
                    const newArray = []
                    for(let subkey in arr[key].quizz){
                        newArray.push(arr[key].quizz[subkey])
                    }
                    return newArray
                }
            }
        }
    }

    function getNewName(arr){
         //if no params return empty string else return name to edit
        if(id===undefined){
            return ""
        }else{
            for(let key in arr){
                if(arr[key].id === id){
                    return arr[key].name
                }
            }
        }
    }
    async function saveIT(){
        const newObj = {}

        for(let key in newQuizz){
            newObj[key] = newQuizz[key]
        }  
        saveQuizz(newObj,name,id);
        // setNewQuizz([]);
        // setName("")
    }
    function deleteQuestion(position){
        const test = newQuizz.filter((filler,i) => { 
            return position !== i 
        })
        setNewQuizz(test)
    }
    
    function move(position,direction){
        let movement
        if(direction === "up"){
            movement = -1
        }else if(direction === "down"){
            movement = 1
        }else{console.error("wrong direction")}
        
        console.log(direction)
        console.log(newQuizz)
        const newArr = [...newQuizz]

        //check if movement is possilbe
        if(newArr[position+movement]===undefined){console.log("not a valid move");return}
        //make the move
        const tobemoved = newArr[position]
        newArr[position] = newArr[position+movement]
        newArr[position+movement] = tobemoved
        setNewQuizz(newArr)
    }
    



    return(
        <div id="quizzMaker">
            <div>makeQuizz</div>
            <button type="button" onClick={saveIT}>Speichern</button>
            <label>Name des Quizzes</label><input type = "text" defaultValue={name} onChange={(e)=>{setName(e.target.value)}}></input>
            
            {newQuizz.map((question,number)=>{
                return (
                <NewQuestion key={`${question.question}+${number}`}number={number} move={move} Question={question} del={deleteQuestion}/>
                )})}

            <button onClick={()=>{setNewQuizz([...newQuizz,{}])}}>Neue Frage</button>

        </div>
    )
}

export default MakeQuizz