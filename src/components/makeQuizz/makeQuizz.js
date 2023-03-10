import {useEffect, useState} from "react"
import { useParams } from "react-router-dom"

import saveQuizz from "../../firebase/firestore/firestore"

import "./makeQuizz.css"
import NewQuestion from "./newQuestion"
import uniqid from "uniqid"

function MakeQuizz(props){


    const {quizzes,load} = props
    const {oldId} = useParams() 
    
    useEffect(()=>{
       if(oldId===undefined){setId(uniqid())} 
    },[])
    const [id,setId] = useState(oldId)
    const [newQuizz,setNewQuizz] = useState(getNewQuizz(quizzes))
    const [name,setName] = useState(getNewName(quizzes))

    
    function getNewQuizz(arr){
        //if unused id return empty array else return quizz to edit
            for(let key in arr){
                if(arr[key].id === id){
                    const newArray = []
                    for(let subkey in arr[key].quizz){
                        newArray.push(arr[key].quizz[subkey])
                    }
                    return newArray
                }
            }
            return []
    }
    function getNewName(arr){
         //if unused id return empty string else return name to edit
            for(let key in arr){
                if(arr[key].id === id){
                    return arr[key].name
                }
            }
            return ""
    }
    async function saveIT(){
        const newObj = {}

        for(let key in newQuizz){
            newObj[key] = newQuizz[key]
        }  
        saveQuizz(newObj,name,id);
        load();
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