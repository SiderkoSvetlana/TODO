//DATA
const todos = [
  {
    id: 1,
    text: "Watch TV",
    isCompleted: false,
    date: new Date().toLocaleTimeString(),
  },
  {
    id: 2,
    text: "Play games",
    isCompleted: false,
    date: new Date().toLocaleTimeString(),
  },
  {
    id: 3,
    text: "Learn English",
    isCompleted: false,
    date: new Date().toLocaleTimeString(),
  },
  {
    id: 4,
    text: "Eat some food",
    isCompleted: false,
    date: new Date().toLocaleTimeString(),
  },
  {
    id: 5,
    text: "Reading books",
    isCompleted: false,
    date: new Date().toLocaleTimeString(),
  },
  {
    id: 6,
    text: "Do some sports",
    isCompleted: false,
    date: new Date().toLocaleTimeString(),
  },
];
//ROOT
const root = document.querySelector("#root");
const header = createHeader();
const todoList = createTodoList(todos);

header.addEventListener("click", (event) => onHeaderClick(event));

root.append(header, todoList);

//HANDLERS

const onHeaderClick = (event) => {
  if (event.target.id === "btnAdd") {
    const todo = {
      id: todos.length + 1,
      text: event.target.previousElementSibling.value,
      isCompleted: false,
      date: new Date().toLocaleTimeString(),
    };
    todos.push(todo);
    renderTodos();
  } else if (event.target.id === "btnDelete") {
    todos.length = 0;
    renderTodos();
  }
};
//RENDER

function renderTodos() {
  const todoList = createTodoList(todos);
  root.innerHTML = "";
  root.append(header, todoList);
}

//COMPONENTS

function createHeader() {
  const header = createElement("header", "d-flex align-items-center gap-2");
  const input = createElement("input", "form-control flex-grow-1","");
  const btnAdd = createElement("button", "btn btn-outline-info","Add");
  const btnDelete = createElement("button","btn btn-outline-primary","Delete");

  input.id = "input";
  btnAdd.id = "btnAdd";
  btnDelete.id = "btnDelete";

  header.append(btnDelete, input, btnAdd);
  return header;
}

function createTodoList(todos) {
  const list = createElement("div", "d-flex flex-column gap-1", "");
  todos.forEach((todo) => {
    const todoItem = createTodoItem(todo);
    list.append(todoItem);
  });
  return list;
}

function createTodoItem(todo) {
  const todoItem = createElement(
    "div",
    "d-flex align-items-center gap-2 border py-2 px-3 rounded-3"
  );
  todoItem.id = todo.id;
  const input = createElement("input", "", "");
  input.type = "checkbox";
  input.checked = todo.isCompleted;
  const text = createElement("p", "m-0 flex-grow-1", todo.text);
  const date = createElement("span", "m-0 badge bg-secondary", todo.date);
  const btnDeleteClose = createElement("button", "btn-close", "");

  todoItem.append(input, text, date, btnDeleteClose);

  return todoItem;
}

// UTILS

function createElement(tag, className, text = "") {
  const element = document.createElement(tag);
  element.className = className;
  element.textContent = text;
  return element;
}
