const newItemForm = document.querySelector('.add-form');
const newItemTitle = newItemForm.querySelector('.add-form-input');
const buttonClick = document.querySelector('.add-form-button');

const isPalindrome = (str) => {
  if (str == '') return 'No date';
  if (str === undefined) return 'No date';

  if (str.length === 0) throw new Error('No data.');
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
  const taskText = newItemTitle.value.toLowerCase().replace(/[/.,!?@;_’'"`%:\s/\-/\–/\—/]*/g, '');

  if (taskText === '') {
    document.getElementById('answer').innerHTML = 'Вы ввели пустую строку.';
  } else {
    const output = (isPalindrome(taskText) === true) ?
      (document.getElementById('answer').innerHTML = 'Да, это палиндром.') :
      (document.getElementById('answer').innerHTML = 'Нет, это не палиндром.');
  }

});