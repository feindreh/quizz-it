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

    1 : newQuestion("Unter der Woche geht Felix gerne mal in die ...","Untere","Obere","Rechte","Linke"),
    2 : newQuestion("Annalena und Katharina kann man gut unterscheiden","Nein","Es gibt einen einfachen Trick!","nach dem zweiten oder dritten Mal","Ja"),
    3 : newQuestion("Steven steht so richtig auf ...","Fusis","Handys","Schmusis","Bussis"),
    4 : newQuestion("Danny und Emre waren zusammen","in Chi na","in Frau en","in Die n","in Mann heim"),
    5 : newQuestion("Lucas trinkt am liebsten","Jelzin","Gorbatschow","Lenin","Putin"),


    6: newQuestion("Francis hat an welchem Ort jemanden behindert gewrestelt","in Heidis Garten","in Dirks Keller","auf Lauras Balkon","vor Lucas Wohnung"),
    7 : newQuestion('Keine der "Lugert`s" ist',"Sophia","Katharina","Annalena","Johannah"),
    8 : newQuestion("Vanessa kommt aus","dem Odenwald","der Pfalz","Hessen","Baden"),
    9 : newQuestion("Felix hat ANGEBLICH!!! an Halloween","Kindern seine Eier gezeigt","Kinder mit Eiern beworfen","Mit einer Pferdemaske Kinder erschreckt","einem Kind die Süßigkeiten geklaut"),
    10 : newQuestion("Steven`s Wohnsitz ist in...","Seckenheim","Ilvesheim","Ladenburg","Feudenheim"),


    11: newQuestion("Steven und Laura waren zusammen in einer Klasse bis zum Ende der ... Klasse","11","10","12","13"),
    12: newQuestion("Fabi und Danny haben sich zum ersten mal gesehen","in einer Vorlesung","bei freeletics","auf einer Wohnheimparty","Sie sind gleichzeitig aus dem Club geflogen"),
    13: newQuestion("Lucas machte sein Abitur","an der IGMH","am Lessing Gymnasium","am LFG","am KFG"),
    14: newQuestion("Katharina zieht am Samstag (alles Heidelberger Stadtteile) nach","Neuenheim","Weststadt","sie bleibt in der Altstadt","Bergheim"),
    15: newQuestion("Der Horsecockmen hat zwischen den Beinen einen","Vorschlaghammer","Abrisskeule","Morgenstern","Zweihandschwert")

  }
}



export default QuestionStack


  