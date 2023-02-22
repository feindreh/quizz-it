import React,{ Component } from "react";
import QuestionStack from "../Questions";
import NextButton from "./nextbutton";
import Answer from "./answers";
import Cashbar from "./cashbar";

class Quizz extends Component {
    constructor(){
        super()
        this.state = {
            count : 0,
            questions : QuestionStack(),
            pickedAnswer:null,
        }
        this.rightAnswer = this.rightAnswer.bind(this)
        this.wrongAnswer = this.wrongAnswer.bind(this)
        this.AnswerPicked = this.AnswerPicked.bind(this)
    }
    wrongAnswer(){
        this.setState({
            count:0,
            pickedAnswer:null,
            questions: QuestionStack(),
        })
    }
    rightAnswer(){
        this.setState({
            count: this.state.count + 1,
            pickedAnswer:null,
        })
    }
    AnswerPicked(boolean){
        if(boolean === true){
            //right answer picked
            this.setState({
                pickedAnswer:true
            })
        }else{
            //wrong answer picked
            this.setState({
                pickedAnswer:false
            })
        }
    }

    render(){
        const {count,pickedAnswer} = this.state
        if(this.state.questions[count] === undefined){return <div id="winner"> </div>}
        const questions = this.state.questions[count].Answers
        let id = 0
            return(
              <div id="quizz">
                <div className="question">{this.state.questions[count].question}</div>
                <div className="answers">
                    {questions.map((answer)=>{
                        id++
                        return <Answer letter={getLetter(id)}key={id} answer={answer} good={this.state.questions[count].rightAnswer} pickedAnswer={pickedAnswer} callback={this.AnswerPicked}/>
                    })}
                </div>
                <Cashbar count={count}/>
                <NextButton answer={pickedAnswer} right={this.rightAnswer} wrong={this.wrongAnswer}/>
              </div>  
            )
     
        
    }
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
            throw "Shit"
    }
    
}

export default Quizz