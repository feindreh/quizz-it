import NextButton from "./nextbutton";
import Answer from "./answers";
import { useState } from "react";
import { useParams } from "react-router-dom";



function Quizz(props){

    let {id} = useParams()
    const {quizzes }= props

    

    function getQuizzById(Quizz,id){
        //get the right quizz
        let goodQuizz
        for(let key in Quizz){
            if(Quizz[key].id === id){
                goodQuizz = Quizz[key]
        }
        }
        return goodQuizz
    }
    // function getNewQuizz(arr){
    //     //if no params return empty array else return quizz to edit
    //     if(id===undefined){
    //         return []
    //     }else{
    //         for(let key in arr){
    //             if(arr[key].id === id){
    //                 const newArray = []
    //                 for(let subkey in arr[key].quizz){
    //                     newArray.push(arr[key].quizz[subkey])
    //                 }
    //                 return newArray
    //             }
    //         }
    //     }
    // }
    function getNameById(arr,id){
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

    
    const [count,setCount] = useState(0);
    const [pickedAnswer,setPickedAnswer] = useState(null)
    const [Answers,setAnswers] = useState(shuffleQuestion(getQuizzById(quizzes,id).quizz[count]))
    const name = getNameById(quizzes,id)
    const questions = getQuizzById(quizzes,id).quizz

    function wrongAnswer(){
        setCount(0)
        setPickedAnswer(null)
        setAnswers(shuffleQuestion(questions[0]))
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