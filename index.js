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

function capsFirst(word) {
  return word[0].toUpperCase() + word.slice(1,word.length);
}

function capsFirsts(sentence) {
  let words = sentence.split(" ").map(function(word) {
    return capsFirst(word);
  });
  return words.join(" ");
}

function titleCased() {
  return tutorials.map(function(tutorial) {
    return capsFirsts(tutorial);
  });
}
