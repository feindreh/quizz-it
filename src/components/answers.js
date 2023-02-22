import React,{ Component } from "react";

class Answer extends Component {
    constructor(props){
        super(props)
        this.checkAnswer = this.checkAnswer.bind(this)
        this.getClassName = this.getClassName.bind(this)
    }

    checkAnswer(){
        if(this.props.good === this.props.answer){
            //    this.props.right();
            this.props.callback(true)
        }else{
            // this.props.wrong();
            this.props.callback(false)
        }
    }
    getClassName(pickled){
        if(pickled === null){
            return "answer"
        }else{
            if(this.props.good === this.props.answer){
                return "answer right"
            }else{return "answer wrong"}
        }
    }

    render(){
        const {answer} = this.props
        return(
            <div className={this.getClassName(this.props.pickedAnswer)} onClick={this.checkAnswer}>{answer}</div>
        )
    }
}

export default Answer
