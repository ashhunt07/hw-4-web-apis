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


// Variables
var mainEl = document.getElementById('main');
var questionEl = document.createElement('div');
var increment = 0; //could use increment++ to go through the quiz

//Questions
questionEl.textContent = questions[increment].question;
mainEl.append(questionEl);

//Answers
for(var i = 0; i < questions[increment].answerChoices.length; i++) {
    var answerChoiceEl = document.createElement('div');
    answerChoiceEl.addEventListener('click', function() {
        
        var answerSelected = this.textContent;
        if(answerSelected === questions[increment].correctAnswer){
            increment++;
            console.log('this is correct')
        } else{
            console.log('this is incorrect')
        }
    
    })

    answerChoiceEl.textContent = questions[increment].answerChoices[i];
    mainEl.append(answerChoiceEl);
}



//keyword this – gathers the information in which the function was fired from and returns selected elements
//ananomous function
//A while loop is not necessary for this to work
//Single quotes can contain double quotes
//Compilor is located inside the browser



