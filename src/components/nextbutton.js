import React,{ Component } from "react";

class NextButton extends Component {
    constructor(props){
        super(props)
    }

    render(){
        const {answer, right, wrong} = this.props
        if(answer === null){
          return(
          null
            )  
        }else{
            return(
                <button className="nextButton"onClick={answer? right: wrong}type="button">{answer? "Gut So! Nächste Frage?": "Leider Falsch, nochmal versuchen? (click mich)" }</button>
            )
        }
        
    }
}

export default NextButton