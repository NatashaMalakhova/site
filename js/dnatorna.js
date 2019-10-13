//DNA to RNA
const newItemForm = document.querySelector('.dna-to-rna');
const newItemTitle = newItemForm.querySelector('.add-form-input');

const dnaToRna = (dna) => {
  let rna = '';

  if (typeof dna !== 'string') return new Error('Date is not "String"');
  if (dna === '') throw new Error('No date.');

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
  const taskText = newItemTitle.value.toUpperCase().replace(/[^A-Za-zа-яА-Я0-9]*/g, '');

  if (taskText === '') {
    document.getElementById('answer-dna').innerHTML = 'Нет данных для конвертации.';
  }
  if (dnaToRna(taskText) === 'Вы ввели неправильные данные, попробуйте ещё раз.') {
    document.getElementById('answer-dna').innerHTML = dnaToRna(taskText);
  } else {
    document.getElementById('answer-dna').innerHTML = 'РНК: ' + dnaToRna(taskText);
  }
});

// RNA no DNA
const newItemFormRna = document.querySelector('.rna-to-dna');
const newItemRna = newItemFormRna.querySelector('.add-form-input');

const rnaToDna = (rna) => {
  let dna = '';

  if (typeof rna !== 'string') return new Error('Date is not "String"');
  if (rna === '') throw new Error('No date.');

  for (let i = 0; i < rna.length; i++) {
    if (rna[i] === 'C') {
      dna += 'G';
    } else if (rna[i] === 'G') {
      dna += 'C';
    } else if (rna[i] === 'A') {
      dna += 'T';
    } else if (rna[i] === 'U') {
      dna += 'A';
    } else {
      return 'Вы ввели неправильные данные, попробуйте ещё раз.';
    }
  }
  return dna;
};

newItemFormRna.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const taskText = newItemRna.value.toUpperCase().replace(/[^a-zA-Z0-9а-яА-Я]*/g, '');

  if (taskText === '') {
    document.getElementById('answer-rna').innerHTML = 'Нет данных для конвертации.';
  }
  if (rnaToDna(taskText) === 'Вы ввели неправильные данные, попробуйте ещё раз.') {
    document.getElementById('answer-rna').innerHTML = rnaToDna(taskText);
  } else {
    document.getElementById('answer-rna').innerHTML = 'ДНК: ' + rnaToDna(taskText);
  }
});