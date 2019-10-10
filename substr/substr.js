const newItemForm = document.querySelector('.add-form');
const addStr = newItemForm.querySelector('#str');
const addStartIndex = newItemForm.querySelector('#start-index');
const addSubstrLength = newItemForm.querySelector('#str-length');

const substr = (str, startIndex, substrLength) => {
  if (str === undefined) throw new Error ('The string is not defined.');

  str = String(str);

  if (startIndex === undefined ) startIndex = 0;
  if (substrLength === undefined) substrLength = str.length;

  if (startIndex >= str.length || substrLength === 0) return '';

  let newStartIndex = (startIndex < 0) ? 0 : startIndex;
  let newLastIndex = (substrLength < 0) ? newStartIndex : (newStartIndex + (substrLength - 1));
    
  if (substrLength >= str.length) {
    newLastIndex = (str.length - 1);
  }
  
  let result = '';

  for (let i = newStartIndex; i <= newLastIndex; i+=1) {
    result += str[i];
  }
  return result;
};

newItemForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  let strText = addStr.value;
  let indexText = addStartIndex.value; 
  let lengthText = addSubstrLength.value;

  indexText = Number(indexText);
  lengthText = Number(lengthText);

  const end = substr(strText, indexText - 1, lengthText);
  
  document.getElementById('answer').innerHTML = end;
});
