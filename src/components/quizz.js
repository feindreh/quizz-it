import React,{ Component } from "react";
import QuestionStack from "../Questions";
import NextButton from "./nextbutton";
import Answer from "./answers";

class Quizz extends Component {
    constructor(){
        super()
        this.state = {
            count : 0,
            questions : QuestionStack,
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
        const questions = this.state.questions[count].Answers
        let id = 0
            return(
              <div>
                <div className="question">{this.state.questions[count].question}</div>
                <div className="answers">
                    {questions.map((answer)=>{
                        id++
                        return <Answer key={id} answer={answer} good={this.state.questions[count].rightAnswer} pickedAnswer={pickedAnswer} callback={this.AnswerPicked}/>
                    })}
                </div>
                <NextButton answer={pickedAnswer} right={this.rightAnswer} wrong={this.wrongAnswer}/>
              </div>  
            )
     
        
    }
}

export default Quizz