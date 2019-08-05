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

function upCased(phrase){
  let lowPhrase = phrase.toLowerCase();
  let lowPhraseWords = lowPhrase.split(' ')
  for(let i =0; i < lowPhraseWords.length; i++){
    if (lowPhraseWords[i] === "OO"){
      lowPhraseWords[i].toUpperCase()
    }else {
    lowPhraseWords[i] = lowPhraseWords[i].charAt(0).toUpperCase() + lowPhraseWords[i].slice(1);
  }}
  return lowPhraseWords.join(' ')
}

function titleCased(){ 
  return tutorials.map(upCased)
  
}


// const name = 'flavio'
// const nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1)