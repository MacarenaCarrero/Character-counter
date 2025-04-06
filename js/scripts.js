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
  const analizerText = disabledCheckBox();
  let word = text.match(/\b\w+\b/g);

  counterCharactersElement.textContent = analizerText.length;
  counterWordsElement.textContent = word.length;
};

const disabledCheckBox = () => {
  if (checkboxElement.checked) {
    return text.replaceAll(' ', '');
  } else {
    return text;
  }
};

textAreaElement.addEventListener('input', checkText);

checkboxElement.addEventListener('change', checkText);
