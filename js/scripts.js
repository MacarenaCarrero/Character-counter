// counters
const counterCharactersElement = document.getElementById('counterCharacters');
const counterWordsElement = document.getElementById('counterWords');
const counterSentencesElement = document.getElementById('counterSentences');

// area de texto
const textAreaElement = document.getElementById('textArea');
// checkBox
const checkboxElement = document.getElementById('checkbox');

// const checkText = () => {
//   text = textAreaElement.value;
//   const analizerText = disabledCheckBox();
//   let word = text.match(/\b\w+\b/g);

//   counterCharactersElement.textContent = analizerText.length;
//   counterWordsElement.textContent = word.length;
// };

// const disabledCheckBox = () => {
//   if (checkboxElement.checked) {
//     return text.replaceAll(' ', '');
//   } else {
//     return text;
//   }
// };

const countWords = text => {
  const word = text.split(' ');
  counterWordsElement.textContent = word.length;
};

const checkText = () => {
  const text = textAreaElement.value;
};

textAreaElement.addEventListener('input', checkText);

checkboxElement.addEventListener('change', checkText);
