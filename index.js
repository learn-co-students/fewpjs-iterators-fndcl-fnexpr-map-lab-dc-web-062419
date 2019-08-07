// // for and for...of
// let students = ["harry", "ron", "hermione", "ginevra"];
// let rollCall = [];

// for (const student of students) {
//   rollCall.push(student + " the wizard" );
// }

// // map() with a function declaration
// function studentRollCall(student) {
//   return student + " the wizard";
// }

// let rollCall = students.map(studentRollCall);

// // map() with a function expression ("anonymous function")
// let rollCall = students.map(function(student) {
//   return student + " the wizard";
// });

// // map() with an arrow function
// let rollCall = students.map(student => student + " the wizard")


const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

function titleCased() {
  return tutorials.map(function(str) {
    str = str.split(' ').map(function(word) {
      return (word.charAt(0).toUpperCase() + word.slice(1));
    })
    return str.join(' ');
  })
};