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
      return 'Данные введены неправильно. Используйте только "G", "C", "T", "A" в любом регистре.';
    }
  }
  return rna;
};

newItemForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const taskText = newItemTitle.value.toUpperCase().replace(/[/.,!?@;_’%^&*:\s/\-/\–/\—/]*/g, '');
  
  if (taskText !== '') {
    dnaToRna(taskText);
    document.getElementById('dna').innerHTML = taskText;
    document.getElementById('rna').innerHTML = dnaToRna(taskText);
  } else {
    document.getElementById('rna').innerHTML = 'Вы ввели пустую строку';
  }
});