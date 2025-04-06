// counters
const counterCharactersElement = document.getElementById('counterCharacters');
const counterWordsElement = document.getElementById('counterWords');
const counterSentencesElement = document.getElementById('counterSentences');

// area de texto
const textAreaElement = document.getElementById('textArea');
// checkBox
const checkboxElement = document.getElementById('checkbox');

//funcion para analizar el texto

const checkText = () => {
  let text = textAreaElement.value;
  let textLength = text.length;
  let word = text.match(/\b\w+\b/g);

  counterCharactersElement.textContent = textLength;
  counterWordsElement.textContent = word.length;
};

const checkCounSentences = () => {
  if (text.endsWith('.')) {
    return sentence;
  }
  counterSentencesElement.textContent = sentence.length;
};

textAreaElement.addEventListener('input', checkText);
textAreaElement.addEventListener('input', checkCounSentences);
