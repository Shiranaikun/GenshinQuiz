const questionEl = document.getElementById("question")
const newGameBTN = document.getElementById("newGame")
const teleport = new Audio("media/teleport.mp3")
const victory = new Audio("media/Victory.mp3")
const questionBTN = document.getElementById("showQuestion")
const answerOptions = document.getElementById("possibleAnswers")
const submitBTN = document.getElementById("submit-btn")

let level = -1
// alert(level)


const allQuestions = [
    {
        questionString: "What is the name of this World?",
        answers: ["Teyvat", "Gaia", "Celestia"],
        correctAnswer: 0
    },

    {
        questionString: "What is the name of the Archon who rules over Mondstadt?",
        answers: ["Rex Lapis", "Azdaha", "Barbatos"],
        correctAnswer: 2
    },

    {
        questionString: "Which of these 3 is not one of the 7 elements in the realm of Teyvat?",
        answers: ["Dendro", "Abyssal", "Anemo"],
        correctAnswer: 1
    },

    {
        questionString: "What is the name of the Guardian Yaksha who is said to reside in Dihua Marsh?",
        answers: ["Guizhong", "Mountain Shaper", "Xiao"],
        correctAnswer: 2
    },

    {
        questionString: "Which nation was at the center of the catastrophe from 500 years ago?",
        answers: ["Khaenri`ah", "Sumeru", "Snezhnaya"],
        correctAnswer: 0
    },

    {
        questionString: "Who is in charge of Liyue\'s famous Pharmacy?",
        answers: ["Director Hu", "Lady Ningguang", "Dr. Baizhu"],
        correctAnswer: 2
    },

    {
        questionString: "Rex Lapis, the god of Contracts, is currently living among the people of Liyue harbor - what is his mortal name & profession?",
        answers: ["Katherine, of the Adventure Guild", "Zhongli, Consultant at Wangsheng Funeral Parlor", "Xingqiu, 2nd Heir to the Fei Yun Commerce Guild"],
        correctAnswer: 1
    },

    {
        questionString: "Who carries the position of \'The Grand Scribe\' at Sumeru\'s Academiya?",
        answers: ["Alhaitham", "Tighnari", "Nahida"],
        correctAnswer: 0
    },

    {
        questionString: "'Osmanthus Wine tastes the same as I remember, but...",
        answers: ["...lately my memory has been failing me.'", "....where are those who share the memories?'", "...I have stopped drinking a long time ago.'"],
        correctAnswer: 1
    },
]


function displayQuestion() {
    questionEl.textContent = "Question #" + (level + 1) + " " + allQuestions[level].questionString

    answerOptions.innerHTML = ""
    for (let i = 0; i < allQuestions[level].answers.length; i++) {
        const answer = allQuestions[level].answers[i]
        answerOptions.innerHTML += `
            <label>
                <input type="radio" name="answer" value="${i}">
                ${answer}
                <br>
            </label>
        `
    }
    submitBTN.innerHTML = `
        <button onclick="getAnswer()" id="answersHere" type="submit"> Answer </button>`
}

function getAnswer() {
    let userAnswer = document.querySelector('input[name="answer"]:checked');
    if (userAnswer) {
        // alert("The user has answered " + userAnswer.value);
    } else {
        alert("Please select an answer.");
    }

    if (parseInt(userAnswer.value) === allQuestions[level].correctAnswer) {
        level++
        // alert("Correct!")
    } else {
        alert("Wrong! Try again!")
    }


    lvSelect()

    displayQuestion()
}

newGameBTN.addEventListener("click", function () {
    teleport.play();
    location.reload()
    alert("A new journey awaits...")
})


questionBTN.addEventListener("click", function () {
    level += 1
    // alert("Current level: " + level)
    lvSelect()
})

function lvSelect() {
    switch (level) {
        case 0:
            document.getElementById("field1").style.backgroundColor = "#1e4164";
            displayQuestion()
            break;

        case 1:
            document.getElementById("field2").style.backgroundColor = "#1e4164";
            displayQuestion()
            break;

        case 2:
            document.getElementById("field3").style.backgroundColor = "#1e4164";
            displayQuestion()
            break;

        case 3:
            displayQuestion()
            document.getElementById("field4").style.backgroundColor = "#1e4164";
            break;

        case 4:
            displayQuestion()
            document.getElementById("field5").style.backgroundColor = "#1e4164";
            break;

        case 5:
            displayQuestion()
            document.getElementById("field6").style.backgroundColor = "#1e4164";
            break;

        case 6:
            displayQuestion()
            document.getElementById("field7").style.backgroundColor = "#1e4164";
            break;

        case 7:
            displayQuestion()

            document.getElementById("field8").style.backgroundColor = "#1e4164";
            break;

        case 8:
            displayQuestion()

            document.getElementById("field9").style.backgroundColor = "#1e4164";
            break;

        case 9:
            victory.play()
            congratz()
            break;


        default:
            questionEl.textContent = "Sorry, somehow you are out of bounds!"
    }
}


function congratz() {
    questionEl.textContent = "Congratulations! \nYou passed the Trial!"

    answerOptions.innerHTML = `
    <img id="wonIMG" src="media/won.png" alt="">
    `

    document.getElementById("showQuestion").style.display = "none";
    submitBTN.style.display = "none";
}
