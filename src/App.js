
import React,{ Component } from "react";

import Header from "./components/header";
import Quizz from "./components/quizz"

class App extends Component {
    constructor(){
        super()
    }

    render(){
        return(
          <div>
            <Header/>
            <Quizz/>
          </div>
        )
    }
}

export default App
