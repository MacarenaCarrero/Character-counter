// counters
const counterCharactersElement = document.getElementById('counterCharacters');
const counterWordsElement = document.getElementById('counterWords');
const counterSentencesElement = document.getElementById('counterSentences');

// area de texto
const textAreaElement = document.getElementById('textArea');
// checkBox
const checkboxElement = document.getElementById('checkbox');

//id span
const minElement = document.getElementById('min');

//funcion para coger el valor del texto
const analizerText = () => {
  let text = textAreaElement.value;
  if (checkboxElement.checked) {
    return text.replaceAll(' ', '');
  } else {
    return text;
  }
};

//characters

const countCharacters = () => {
  let text = analizerText();
  counterCharactersElement.textContent = text.length;
};

// ahora palabras
const countWords = () => {
  let text = analizerText();
  const word = text.split(' ');
  counterWordsElement.textContent = word.length;
};

// sentenceeees

const countSentences = () => {
  let text = analizerText();
  const sentences = text.split('.');
  counterSentencesElement.textContent = sentences.length;
};

//tiempo

const time = () => {
  const textTime = textAreaElement.value;
  const words = textTime.split(' ');
  const minutes = words.length / 250;

  minElement.textContent = minutes;
};

textAreaElement.addEventListener('input', analizerText); //escucho el texto y llamo a la funcion
textAreaElement.addEventListener('input', countWords);
textAreaElement.addEventListener('input', countCharacters);
textAreaElement.addEventListener('input', countSentences);
textAreaElement.addEventListener('input', time);
