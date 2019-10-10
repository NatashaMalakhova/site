const newItemForm = document.querySelector('.add-form');
const addStr = newItemForm.querySelector('#str');
const addStartIndex = newItemForm.querySelector('#start-index');
const addSubstrLength = newItemForm.querySelector('#str-length');


const substr = (str, startIndex, substrLength) => {
  if (str === undefined) throw new Error ('The string is not defined.');
  str = String(str);
  if (startIndex === undefined ) startIndex = 0;
  if (substrLength === undefined) substrLength = str.length;

  let newStartIndex = (startIndex < 0) ? 0 : startIndex;
  let newSubstrLength = (substrLength < 0) ? 1 : 
    ((startIndex + substrLength - 1) < str.length) ? substrLength :
    str.length;

  if (startIndex > str.length || newSubstrLength === 0) return '';

  return str.split('').slice(newStartIndex, newStartIndex + newSubstrLength).join('');
};

newItemForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const strText = addStr.value;
  const indexText = addStartIndex.value;
  const lengthText = addSubstrLength.value;
  const result = substr(strText, indexText, lengthText);

  substr(strText, indexText, lengthText);
  
  document.getElementById('answer').innerHTML = result;
});