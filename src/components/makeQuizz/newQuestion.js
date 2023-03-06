
function NewQuestion(props){

    const{number,Question} = props


    return(
        <div className="newQuestion">
            <div>Frage Nummer: {number+1}</div>
            <div className="wrap">
                <label>Frage</label>
                <input type="text" onChange={(e)=>{Question.question = e.target.value}}></input>
            </div>
            <div className="wrap">
                <label>Richtige Antwort:</label>
                <input type="text" onChange={(e)=>{Question.rightAnswer = e.target.value}}></input>
            </div>
            <div className="wrap">
                <label>Antwort 2:</label>
                <input type="text" onChange={(e)=>{Question.answer2 = e.target.value}}></input>
            </div>
            <div className="wrap">
                <label>Antwort 3:</label>
                <input type="text" onChange={(e)=>{Question.answer3 = e.target.value}}></input>
            </div>
            <div className="wrap">
                <label>Antwort 4:</label>
                <input type="text" onChange={(e)=>{Question.answer4 = e.target.value}}></input>
            </div>
        </div>
    )
}

export default NewQuestion