import NextButton from "./nextbutton";
import Answer from "./answers";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getQuizz } from "../../firebase/firestore/firestore";

function Quizz(props){

    const {id} = useParams()

    useEffect(()=>{
        load()
     },[])
 
     async function load(){
         await getQuizz().then((resolve)=>{
             setQuizzes(getNewQuizz(resolve));
             setName(getNewName(resolve))
            let goodQuizz
            for(let key in resolve){
                //get the right quizz
                if(resolve[key].id === id){
                    goodQuizz = resolve[key]
                }
            }
            setQuestions(goodQuizz.quizz)
            setAnswers(shuffleQuestion(goodQuizz.quizz[count]))

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
    // let {quizzes} = props

    
    const [quizzes,setQuizzes] = useState([])
    const [questions,setQuestions] = useState([])
    const [count,setCount] = useState(0);
    const [pickedAnswer,setPickedAnswer] = useState(null)
    const [Answers,setAnswers] = useState([])
    const [name,setName] = useState("")

    function wrongAnswer(){
        setCount(0)
        setPickedAnswer(null)
    }

    function rightAnswer(){
        setCount(count+1)
        setPickedAnswer(null)
        setAnswers(shuffleQuestion(questions[count+1]))
    }

    function AnswerPicked(boolean){
        if(boolean === true){
            //right answer picked
            setPickedAnswer(true)
        }else{
            setPickedAnswer(false)
        }
    }


    
    console.log(questions)
    console.log(Answers)
    if(questions.length===0){return <></>}
    if(questions[count] === undefined){return <div id="winner"> </div>}
    let key= 0
    return(
        <div>
            <div id="quizzName">{name}</div>
            <div id="quizz">
            <div className="question">{questions[count].question}</div>
            <div className="answers">
                {Answers.map((answer)=>{
                    key++
                    return <Answer letter={getLetter(key)}key={key} answer={answer} good={questions[count].rightAnswer} pickedAnswer={pickedAnswer} callback={AnswerPicked}/>
                })}
            </div>
            <NextButton answer={pickedAnswer} right={rightAnswer} wrong={wrongAnswer}/>
            </div>
        </div>
    )
    }

function getLetter(number){
    switch(number){
        case 1:
            return "A";
        case 2:
            return "B";
        case 3:
            return "C";
        case 4:
            return "D";
        default:
            console.error("Shit")
    }
    
}
function shuffle(a,b,c,d){
    const arr = [a,b,c,d]
    const result = []
    while(arr.length>0){
        const number = Math.floor(Math.random()*arr.length);
        result.push(arr[number])
        arr.splice(number,1)
    }
    return result
}
function shuffleQuestion(question){
    if(question === undefined){return}
    return shuffle(question.rightAnswer,question.answer2,question.answer3,question.answer4)
}


export default Quizz