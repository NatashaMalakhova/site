const newItemForm = document.querySelector('.add-form');
const addStr = newItemForm.querySelector('#str');
const addStartIndex = newItemForm.querySelector('#start-index');
const addSubstrLength = newItemForm.querySelector('#str-length');

const substr = (str, startIndex, substrLength) => {
  if (str === undefined) throw new Error('The string is not defined.');

  if (startIndex === '') startIndex = 0;
  if (substrLength === '') substrLength = str.length;

  startIndex = Number(startIndex);
  substrLength = Number(substrLength);

  if (startIndex >= str.length || substrLength === 0) return 'Нет подстроки';

  let newStartIndex = (startIndex < 0) ? 0 : startIndex;
  let newLastIndex = (substrLength >= str.length) ? (str.length - 1) :
    (substrLength < 0) ? newStartIndex :
    ((str.length - startIndex) < substrLength) ? (str.length - 1) :
    (newStartIndex + (substrLength - 1));

  let result = '';

  for (let i = newStartIndex; i <= newLastIndex; i += 1) {
    result += str[i];
  }
  return result;
};

newItemForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  let strText = addStr.value;
  let indexText = addStartIndex.value;
  let lengthText = addSubstrLength.value;

  const end = substr(strText, indexText, lengthText);

  if (end === 'Нет подстроки') {
    document.getElementById('answer').innerHTML = 'Нет подстроки';
  } else {
    document.getElementById('answer').innerHTML = 'Подстрока: ' + end;
  }
});