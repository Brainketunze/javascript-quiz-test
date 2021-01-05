'use strict';

/* Program Data
  in this file you can declare variables to store important data for your program
  the data can only be primitives, objects or arrays
  do not store dom elements in these variables!!!!
    your handlers will query the DOM each time they need to make a change
  these variables will be imported by your handlers when necessary
    not by your logic
    not by your listeners
*/


// this is example data for the starter demo
//  delete this data when you begin and use the own quiz data instead



// here's a suggestion for your game's state, see if this works for your team
//  there are many ways to represent your game as data!
/**
 *
 */
const quizData = {
 // how many questions has the user answered?
  //  you can calculate this value by iterating through the questions
  //  is selected === -1?
  answered: 0,
  // how many correct answers has the user submitted?
  //  you can calculate this value by iterating through the questions
  //  is selected === correct?
  correct: 0,
  // should the correct answer be indicated when a user is wrong?
  //  a possible user setting, this could be toggled in the UI
  showCorrectAnswers: false,
  // the questions in the quiz
  questions: [
    {
      text: "Which one of these is a JavaScript package manager?",
      answers: [
        "Node.js",
        "TypeScript",
        "npm"
      ],
      correctAnswer: 2,
      resource:"https://firebearstudio.com/blog/the-best-javascript-package-managers.html"
    },
    {
      text: "Which tool can you use to ensure code quality?",
      answers: [
        "Angular",
        "jQuery",
        "ESLint"
      ],
      correctAnswer: 2,
      resource:"https://colorlib.com/wp/code-quality-tools/"

    },
    {
      text: "What is the alternate name for Java script?",
      answers: [
        "ECMScript",
        "ECMAScript",
        "LimeScript"
      ],
      correctAnswer: 1,
      resource:"https://medium.com/madhash/the-many-names-of-javascript-livescript-jscript-ecmascript-es6-and-not-still-java-568b584a91b5"

    },
    {
      text: "Which of the following is not a reserved word in JavaScript?",
      answers: [
        "interface",
        "throws",
        "program"
      ],
      correctAnswer: 2,
      resource:"https://mathiasbynens.be/notes/javascript-identifiers"

    },
    {
      text: "Inside which element do you put JavaScript?",
      answers: [
        "script",
        "code",
        "const"
      ],
      correctAnswer: 0,
      resource:"https://www.w3schools.com/js/js_whereto.asp"

    },
    {
      text: 'How do you write "Hello World" in an alert box?',
      answers: [
          'msgBox ("Hello World")',
          'alertBox ("Hello World")',
          'alert ("Hello World")'
      ],
      correctAnswer: 0,
     resource:"https://www.w3schools.com/quiztest/result.asp"
      },
  {
       text: 'What is it called when we make a mistake in the script?',
  answers: [
      'Error',
      'Bug',
      'Mistake'
  ],
     correctAnswer: 1,
     resource:'https://www.sanfoundry.com/javascript-mcqs-forms-debugging/#google_vignette'
      },
  {
    text: 'Which of the following is the definition for debugging?',
   answers: [
    'Finding bugs',
    'Fixing bugs',
   'Both are correct'
],
 correctAnswer: 2,
 resource:'https://www.sanfoundry.com/javascript-mcqs-forms-debugging/#google_vignette'
  },
   {
    text: 'The "function" and " var" are known as?',
    answers: [
     'Keywords',
     'Data types',
     'Declaration statements',
   
    ],
     correctAnswer: 2,
     resource:'https://www.javatpoint.com/javascript-mcq'
      },
   {
        text: 'Where is the error icon option available?',
        answer: [
           'Tools',
           'Help',
          'File',
        ],
         correctAnswer: 0,
         resource:'https://www.sanfoundry.com/javascript-mcqs-forms-debugging/#google_vignette'
        },
    
],
};
