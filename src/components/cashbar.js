import React,{ Component } from "react";
import { Cash } from "../Questions";

class Cashbar extends Component {
    constructor(props){
        super(props)
        this.state={
            active:0
        }
    }
    cash=Cash();

    render(){
        const {count} = this.props
        let id = 0
        return(
          <div id="cash">
            {this.cash.map((money)=>{
                id++
                let Name = "cash"
                if(id===count){Name = "cashmoney"}
                return <div className={Name}key = {id}>{money}€</div>
            })}
          </div>
        )
    }
}

export default Cashbar