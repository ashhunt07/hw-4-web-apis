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


var mainEl = document.getElementById('main');
var questionEl = document.getElementById('questions');
var choicesEl = document.getElementById('choices');
var progressEl = document.getElementById('progress');
var starter = document.getElementById('start-btn');
var countDown = document.getElementById('timer');

var increment = 0;
var timerlimit = 60;

function startGame(){
    starter.addEventListener("click", function() {
    starter.classList.add('hide');
    mainEl.classList.remove ('hide');
});

var timer = setInterval(function () {
    // countDown.append(timerlimit)
    console.log(timerlimit)
    timerlimit--
}, 1000)

function renderProgress(boolean) {
    if (boolean) {
        progressEl.textContent = 'correct';
    } else {
        progressEl.textContent = 'incorrect';
    }
    setTimeout(function () {
        progressEl.textContent = ''
    }, 2000)
}


function renderQuestionChoices() {
    if (increment === questions.length) {
        console.log('game complete');
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
                    increment++
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
renderQuestionChoices()


// timerlimit <= 0 || (increment === questions.length - 1) 




// // Variables
// var mainEl = document.getElementById('main');
// var questionEl = document.getElementById('questions')
// var choicesEl = documnent.getElementById('choices')

// var increment = 0; //could use increment++ to go through the quiz


// function renderChoices(){

//     

//     //Answers
//     for(var i = 0; i < questions[increment].answerChoices.length; i++) {

//         var answerChoiceEl = document.createElement('div');
//         answerChoiceEl.setAttribute('class', 'answer-choices');
        
//         answerChoiceEl.textContent = questions[increment].answerChoices[i];
//         choicesEl.append(answerChoiceEl);

//         answerChoiceEl.addEventListener('click', function(e) {
//             e.preventDefault();
//             var answerSelected = this.textContent;
//             if(answerSelected === questions[increment].correctAnswer){
//                 increment++;
//                 choicesEl.innerHTML ="";
//                 renderChoices();
//             } else{
//                 console.log('this is incorrect')
//             }
        
//         })
        
//     }

// }

// // Timer function

// function timeClock(){
//     var timerlimit = 100;
//     var timer = setInterval(function() { 
//         timerlimit--
//     }, 1000);

//     if (timerlimit <=0 || increment === questions.length +1) {
//         clearInterval(timer);
//     }
// }

// renderChoices()

// keyword this – gathers the information in which the function was fired from and returns selected elements
// ananomous function
// A while loop is not necessary for this to work
// Single quotes can contain double quotes
// Compilor is located inside the browser


