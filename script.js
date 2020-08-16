var questions = [  //making an array of objects
    //Why Objects? an object can contain an array in itself
    {
        question: 'Which is not a Javascript Data Type?',
        answerChoices: ['Boolean', 'Boolee', 'Baboon', 'Bamalam'],
        correctAnswer: 'Boolean',
    },
    {
        question: 'Which symbol is used for single-line comments in Javascript?',
        answerChoices: ['<!-- -->', '/* */', '//', '$()'],
        correctAnswer: '//',
    },
    {
        question: 'What is NOT an undefined value in JavaScript?',
        answerChoices: ['Variable used in the code do not exist', 'Property does not exist', 'When a variable equals zero', 'Variable is not assigned to any value'],
        correctAnswer: 'When a variable equals zero',
    },
    {
        question: 'Javascript is what kind of language?',
        answerChoices: ['A linking style programming language', 'Structured programming language', 'A hypertext markup programming language', 'An object-based programming language'],
        correctAnswer: 'Structured programming language',
    },
    {
        question: 'What is NOT a type of Pop up box available in JavaScript?',
        answerChoices: ['Alert', 'Ping', 'Prompt', 'Confirm'],
        correctAnswer: 'Ping',
    },
    {
        question: 'What is the correct place to insert a JavaScript?',
        answerChoices: ['The "head" section', 'The "body" section', 'Both the "head" and the "body" sections', 'None of the Above'],
        correctAnswer: 'Both the "head" and the "body" sections',
    },
    {
        question: 'Which way can JavaScript code can be involved in an HTML file?',
        answerChoices: ['Inline', 'Internal', 'External', 'All of the Above'],
        correctAnswer: 'All of the Above',
    },
    {
        question: 'Is JavaScript a case-sensitive language?',
        answerChoices: ['Yes', 'No', 'Maybe', 'I do not know'],
        correctAnswer: 'Yes',
    },
]


var mainEl = document.getElementById('quiz');
var questionEl = document.getElementById('questions');
var choicesEl = document.getElementById('choices');
var progressEl = document.getElementById('progress');
var starter = document.getElementById('intro')
var startButton = document.getElementById('start-btn');
var countDown = document.getElementById('timer');
var highScore = document.getElementById('highScore')

var increment = 0;
var timerlimit = 60;
var score = 0;
// var finalScore = 0;

startButton.addEventListener("click", startGame);

// Start Game on Click!
function startGame(){
    starter.classList.add('hide');
    mainEl.classList.remove ('hide');


// Add Timer
var timer = setInterval(function () {
    console.log(timerlimit);
    timerlimit--;
    countDown.textContent = timerlimit + ' seconds remaining';
    if (timerlimit <= 0) {
        clearInterval(timer);
        endGame();
    }
}, 1000);

function renderProgress(boolean) {
    if (boolean) {
        progressEl.textContent = 'correct';
        score++;
        localStorage.setItem("Score: ", score);
    } else {
        progressEl.textContent = 'incorrect';
    }
    setTimeout(function () {
        progressEl.textContent = '';
    }, 2000)
}

function renderQuestionChoices() {
    if (increment === questions.length || timerlimit <= 0) {
        clearInterval(timer);
        countDown.textContent = 'Time is up!';
        mainEl.classList.add('hide');
        endGame();
    } else {
        questionEl.textContent = questions[increment].question;

        for (var i = 0; i < questions[increment].answerChoices.length; i++) {
            var answerChoiceEl = document.createElement('div');
            answerChoiceEl.setAttribute('class', 'answer-choices');
            answerChoiceEl.textContent = questions[increment].answerChoices[i]
            choicesEl.append(answerChoiceEl)
            answerChoiceEl.addEventListener('click', function (e) {
                e.preventDefault()
                var answerSelected = this.textContent;
                if (answerSelected === questions[increment].correctAnswer) {
                    increment++;
                    choicesEl.innerHTML = '';
                    renderProgress(true);
                    renderQuestionChoices();
                } else {
                    renderProgress(false);
                    timerlimit = timerlimit - 10;
                }
            })
        }    
        
    }
}

function endGame(){
    highScore.classList.remove('hide');
    var finalText = document.getElementById('highScore');
    finalText.textContent = "Your final score is: " + score;
}



renderQuestionChoices()
};