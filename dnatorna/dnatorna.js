const newItemForm = document.querySelector('.add-form');
const newItemTitle = newItemForm.querySelector('.add-form-input');

const dnaToRna = (dna) => {
  let rna = '';
    
  if (typeof dna !== 'string' ) throw new Error ('Ошибка типа данных');
  if (dna === '' ) throw new Error ('Ошибка. Пустая строка');

  dna = dna.toUpperCase().replace(/[/.,!?@;_’%:\s/\-/\–/\—/]*/g, '');

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
      throw new Error ('Ошибка ввода строки, неправильные данные или лишние символы');
    }
  }
  return rna;
};

newItemForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const taskText = newItemTitle.value;
  dnaToRna(taskText);
  console.log(taskText);
  document.getElementById('dna').innerHTML = taskText.toUpperCase().replace(/[/.,!?@;_’%:\s/\-/\–/\—/]*/g, '');

  document.getElementById('rna').innerHTML = dnaToRna(taskText);
});