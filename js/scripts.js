// counters
const counterCharactersElement = document.getElementById('counterCharacters');
const counterWordsElement = document.getElementById('counterWords');
const counterSentencesElement = document.getElementById('counterSentences');

// area de texto
const textAreaElement = document.getElementById('textArea');
// checkBox
const checkboxElement = document.getElementById('checkbox');

//funcion para analizar el texto
let text = '';
const checkText = () => {
  text = textAreaElement.value;
  let word = text.match(/\b\w+\b/g);

  counterCharactersElement.textContent = text.length;
  counterWordsElement.textContent = word.length;
};

const deleteSpace = () => {
  if (checkboxElement.checked) {
    textreplaceAll(' ', '');
  } else {
    text;
  }
};

// const checkCountSentences = () => {
//   counterSentencesElement.textContent = sentence.length;
// };

textAreaElement.addEventListener('input', checkText);
// textAreaElement.addEventListener('input', checkCountSentences);
checkboxElement.addEventListener('click', deleteSpace);
