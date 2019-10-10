const newItemForm = document.querySelector('.add-form');
const newItemTitle = newItemForm.querySelector('.add-form-input');
const buttonClick = document.querySelector('.add-form-button');

const isPalindrome = (str) => {
  if (str === '') throw new Error ('There is no data. The empty string.');
  if (str === undefined) throw new Error ('The string is not defined.');
    
  str = String(str).toLowerCase().replace(/[/.,!?@;_’'"`%:\s/\-/\–/\—/]*/g, '');
  if (str.length === 0) throw new Error ('No data.');
  if (str.length === 1) return true;

  const result = (str) => {
    let firstIndex = str[0];
    let lastIndex = str[str.length - 1];
    if (str.length <= 1) return true;
    if (firstIndex !== lastIndex) return false;
    
    return result(str.slice(1, -1));
  };
  return result(str); 
};

newItemForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const taskText = newItemTitle.value;

  isPalindrome(taskText);

  const output = (isPalindrome(taskText) === true) ? 
  (document.getElementById('answer').innerHTML = 'Да, это палиндром.') : 
  (document.getElementById('answer').innerHTML = 'Нет, это не палиндром.');
});