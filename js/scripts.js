// counters
const counterCharactersElement = document.getElementById('counterCharacters');
const counterWordsElement = document.getElementById('counterWords');
const counterSentencesElement = document.getElementById('counterSentences');

// area de texto
const textAreaElement = document.getElementById('textArea');
// checkBox
const checkboxElement = document.getElementById('checkbox');

//funcion para character

const checkCounterCharacter = () => {
  let text = textAreaElement.value;
  let textLength = text.length;
  counterCharactersElement.textContent = textLength;
};

// funcion para words
let totalWords = 0;
const checkCounterWords = () => {
  if (text.endsWith(' ') || text.endsWith('.')) {
    totalWords++;
  }
  counterWordsElement.textContent = totalWords;
};

textAreaElement.addEventListener('input', checkCounterCharacter);
textAreaElement.addEventListener('input', checkCounterWords);
