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

    name:"Wer wird Stevionär",

    0 : newQuestion("Unter der Woche geht Felix gerne mal in die ...","Untere","Obere","Rechte","Linke"),
    1 : newQuestion("Annalena und Katharina kann man gut unterscheiden","Nein","Es gibt einen einfachen Trick!","nach dem zweiten oder dritten Mal","Ja"),
    2 : newQuestion("Steven steht so richtig auf ...","Fusis","Handys","Schmusis","Bussis"),
    3 : newQuestion("Danny und Emre waren zusammen","in Chi na","in Frau en","in Die n","in Mann heim"),
    4 : newQuestion("Lucas trinkt am liebsten","Jelzin","Gorbatschow","Lenin","Putin"),


    5: newQuestion("Francis hat an welchem Ort jemanden behindert gewrestelt","in Heidis Garten","in Dirks Keller","auf Lauras Balkon","vor Lucas Wohnung"),
    6 : newQuestion('Keine der "Lugert`s" ist',"Sophia","Katharina","Annalena","Johannah"),
    7 : newQuestion("Vanessa kommt aus","dem Odenwald","der Pfalz","Hessen","Baden"),
    8 : newQuestion("Felix hat ANGEBLICH!!! an Halloween","Kindern seine Eier gezeigt","Kinder mit Eiern beworfen","Mit Pferdemaske Kinder erschreckt","einem Kind die Süßigkeiten geklaut"),
    9 : newQuestion("Steven`s Wohnsitz ist in...","Seckenheim","Ilvesheim","Ladenburg","Feudenheim"),


    10: newQuestion("Steven und Laura waren zusammen in einer Klasse bis zum Ende der ... Klasse","11","10","12","13"),
    11: newQuestion("Fabi und Danny haben sich zum ersten mal gesehen","in einer Vorlesung","bei freeletics","auf einer Wohnheimparty","gleichzeitig aus dem Club geflogen"),
    12: newQuestion("Lucas machte sein Abitur","an der IGMH","am Lessing Gymnasium","am LFG","am KFG"),
    13: newQuestion("Katharina zieht am Samstag (alles Heidelberger Stadtteile) nach","Neuenheim","Weststadt","sie bleibt in der Altstadt","Bergheim"),
    14: newQuestion("Der Horsecockmen hat zwischen den Beinen einen","Vorschlaghammer","Abrisskeule","Morgenstern","Zweihandschwert")

  }
}

export default QuestionStack


  