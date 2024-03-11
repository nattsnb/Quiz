import './styles.css';

class Question {
    constructor (message, answer){
        this.message = message;
        this.answer = answer;
    }
}

class YesNoQuestion  extends Question {
    constructor (message, answer){
        super(message, answer);
    }
    askQuestion(){
        const userAnswerRaw = prompt("QUESTION...\n" + this.message + '\nAnswer "yes" or "no".')
        const userAnswer = userAnswerRaw.trim().toLowerCase()
        if (userAnswer === this.answer) {
            return userAnswer
        }
    }
}

class ShortAnswerQuestion extends Question {
    constructor (message, answer){
        super(message, answer);
    }
    askQuestion(){
        const userAnswerRaw = prompt("QUESTION...\n" + this.message)
        const userAnswer = userAnswerRaw.trim().toLowerCase()
        if (userAnswer === this.answer) {
            return userAnswer
        }
    }
}

class SingleChoiceQuestion extends Question{
    constructor (message, answA, answB, answC, answD, answer){
        super(message, answer);
        this.answA = answA;
        this.answB = answB;
        this.answC = answC;
        this.answD = answD;
    }
    askQuestion(){
        const userAnswerRaw = prompt("QUESTION...\n" + this.message
            + "\n\n a)" +this.answA
            + "\n b)" +this.answB
            + "\n c)" +this.answC
            + "\n d)" +this.answD
            + "\n\nAnswer a, b, c or d.")
        const userAnswer = userAnswerRaw.trim().toLowerCase()
        if (userAnswer === this.answer) {
            return userAnswer
        }
    }
}

class MultipleChoiceQuestion extends Question{
    constructor (message, answA, answB, answC, answD, answer){
        super(message, answer);
        this.answA = answA;
        this.answB = answB;
        this.answC = answC;
        this.answD = answD;
        this.answer = answer;
    }
    askQuestion(){
        const userAnswerRaw = prompt("QUESTION...\n" + this.message
            + "\n\n a)" +this.answA
            + "\n b)" +this.answB
            + "\n c)" +this.answC
            + "\n d)" +this.answD
            + "\n\nAnswer a, b, c or d. Divide your answers using comas.")
        const userAnswer = userAnswerRaw.trim().toLowerCase().replace(",","").replace(" ","")
        if (userAnswer === this.answer) {
            return userAnswer
        }
    }
}

class Quiz {
    constructor(){
        this.pointsArray = []
    }
    start(){
        const question1 = new ShortAnswerQuestion ('What is capital of France?', 'paris')
        this.pointsArray.push(question1.askQuestion())

        const question2 = new YesNoQuestion ('Can a square be considered a rectangle?', 'yes')
        this.pointsArray.push(question2.askQuestion())

        const question3 = new SingleChoiceQuestion ("Which gass is most aboundand in Earth's atmpsphere?",
            " oxygen", " hydrogen", " carbon dioxide", " nitrogen", "d")
        this.pointsArray.push(question3.askQuestion())

        const question4 = new MultipleChoiceQuestion ("Which of the following countries are in Europe?",
            " Australia", " France", " Spain", " Brazil", "bc")
        this.pointsArray.push(question4.askQuestion())

        let score = this.pointsArray.filter(function( element ) {
            return element !== undefined;
        });
        console.log("Your score was " + score.length + "/4!\nHere are your answers:")
        console.log(score)
    }

}

const quiz = new Quiz();

quiz.start();

