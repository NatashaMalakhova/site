const newItemForm = document.querySelector('.add-form');
const newItemTitle = newItemForm.querySelector('.add-form-input');

const dnaToRna = (dna) => {
  let rna = '';

  if (typeof dna !== 'string' ) return new Error ('Date is not "String"');
  if (dna === '' ) throw new Error ('No date.');

  for (let i = 0; i < dna.length; i++) {
    if (dna[i] === 'G') {
      rna += 'C';
    } else if (dna[i] === 'C') {
      rna += 'G';
    } else if (dna[i] === 'T') {
      rna += 'A';
    } else if (dna[i] === 'A') {
      rna += 'U';
    } else {
      return 'Вы ввели неправильные данные, попробуйте ещё раз.';
    }
  }
  return rna;
};

newItemForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const taskText = newItemTitle.value.toUpperCase().replace(/[/.,!?@;_’%^&*:\s/\-/\–/\—/]*/g, '');
  
  if (taskText === '') {
    document.getElementById('answer').innerHTML = 'Вы ввели пустую строку.';
  } 
  if (dnaToRna(taskText) === 'Вы ввели неправильные данные, попробуйте ещё раз.') {
    document.getElementById('answer').innerHTML = dnaToRna(taskText);
  } else {
    document.getElementById('answer').innerHTML = 'РНК: ' + dnaToRna(taskText);
  }
});