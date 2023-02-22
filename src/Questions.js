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



const newQuestion = (question,rightAnswer,Answer1,Answer2,Answer3)=>{
    return{
        question,
        rightAnswer,
        Answers: shuffle(rightAnswer,Answer1,Answer2,Answer3)
    }
}

const QuestionStack = () => {
    return{ 
    0 : newQuestion("Lust auf ein Quizz?","Ja","Ne","Lieber nicht","Hmm.... Nein"),
    1 : newQuestion("Steven steht so richtig auf ...","Fusis","Handys","Schmusis","Bussis"),
    2 : newQuestion("Unter der Woche geht Steven gerne mal in die ...","Untere","Obere","Rechte","Linke"),
    3 : newQuestion("Sein Wohnsitz ist in...","Seckenheim","Ilvesheim","Oggersheim","Frankfurt"),
    4 : newQuestion("Steven hat so viel Zeit, weil er ....","gekündigt wurde","gerne Zeit mit dir verbringt.","Alkoholiker ist.","Urlaub hat"),
  }
}



export default QuestionStack




  