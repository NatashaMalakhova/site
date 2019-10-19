let status = false;

let addButton = document.getElementById('add');
let inputTask = document.getElementById('new-task');
let unfinishedTasks = document.getElementById('unfinished-tasks');

const createNewElement = (task, status) => {
  const listItem = document.createElement('li');
  listItem.className = "todo-list-item";

  const checkbox = document.createElement('button');
  checkbox.onclick = status != status;

  if (status) {
    checkbox.className = "material-icons checkbox";
    checkbox.innerHTML = "<i class='material-icons'>radio_button_checked</i>";
    listItem.className = "todo-list-item finish";
  } else {
    checkbox.className = "material-icons checkbox";
    checkbox.innerHTML = "<i class='material-icons'>radio_button_unchecked</i>";
  }

  const label = document.createElement('label');
  label.className = "text";
  label.innerText = task;

  const deleteButton = document.createElement('button');
  deleteButton.className = "material-icons delete";
  deleteButton.innerHTML = "<i class='material-icons'>delete</i>";

  listItem.appendChild(checkbox);
  listItem.appendChild(label);
  listItem.appendChild(deleteButton);
  return listItem;
};

const addTask = () => {
  if (inputTask.value) {
    let listItem = createNewElement(inputTask.value, false);
    unfinishedTasks.appendChild(listItem);
    binTaskEvent(listItem, finishTask);
    save();

    inputTask.value = '';
  }
};

addButton.onclick = addTask;

const deleteTask = (evt) => {
  const listItem = evt.currentTarget.parentNode;
  const ul = listItem.parentNode;
  ul.removeChild(listItem);
  save();
};

const finishTask = (evt) => {
  const listItem = evt.currentTarget.parentNode;
  const checkbox = listItem.querySelector('button.checkbox');

  checkbox.className = "material-icons checkbox";
  checkbox.innerHTML = "<i class='material-icons'>radio_button_checked</i>";
  listItem.className = "todo-list-item finish";
  binTaskEvent(listItem, unfinishTask);
  save();
};

const unfinishTask = (evt) => {
  const listItem = evt.currentTarget.parentNode;
  listItem.className = "todo-list-item";
  const checkbox = listItem.querySelector('button.checkbox');
  checkbox.innerHTML = "<i class='material-icons'>radio_button_unchecked</i>";
  binTaskEvent(listItem, finishTask);
  save();
};

const binTaskEvent = (listItem, checkboxEvent) => {
  const checkbox = listItem.querySelector('button.checkbox');
  const deleteButton = listItem.querySelector('button.delete');
  const label = listItem.querySelector('label');

  label.onclick = checkboxEvent;
  checkbox.onclick = checkboxEvent;
  deleteButton.onclick = deleteTask;
};

const save = () => {
  const todoListArr = [];

  for (let i = 0; i < unfinishedTasks.children.length; i++) {
    item = unfinishedTasks.children[i];

    todoListArr.push({
      text: item.getElementsByTagName('label')[0].innerText,
      status: item.classList.contains('finish')
    });
  }

  localStorage.removeItem('todo');
  localStorage.setItem('todo', JSON.stringify({
    list: todoListArr
  }));
};

const load = () => {
  return JSON.parse(localStorage.getItem('todo'));
};

const data = load();

if (data && data.list) {
  for (let i = 0; i < data.list.length; i++) {
    const item = data.list[i];
    const listItem = createNewElement(item.text, item.status);
    unfinishedTasks.appendChild(listItem);
    binTaskEvent(listItem, item.status ? unfinishTask : finishTask);
  }
}