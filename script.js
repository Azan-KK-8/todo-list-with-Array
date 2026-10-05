const inputBox = document.getElementById('inputbox')
const addbtn = document.getElementById('addbtn')
const todolist = document.getElementById('todolist')
let todo = [];
let EditTodo = null;
addbtn.addEventListener('click', function () {
  const InputText = inputBox.value.trim();
  if (InputText.length <= 0) {
    alert("please write a something here ....")
    return;
  }
  if (addbtn.value === "Edit") {
    EditTodo.target.previousElementSibling.innerHTML = InputText;
    addbtn.value = "Add";
    inputBox.value = ""
    return;
  }
  // Creating a p tag
  const li = document.createElement("li")
  const p = document.createElement("p")
  p.innerHTML = InputText;
  li.appendChild(p);

  const Editbtn = document.createElement("button")
  Editbtn.innerHTML = "Edit"
  Editbtn.classList.add("btn", "Edit")
  li.appendChild(Editbtn)

  const Deletebtn = document.createElement("button")
  Deletebtn.classList.add("btn", "Delete")
  Deletebtn.innerHTML = "Remove"
  li.appendChild(Deletebtn)

  let obj = {
    task: InputText,
    id: todo.length + 1
  }

  todo.push(obj)
 li.dataset.id = obj.id
  console.log(todo)
  todolist.appendChild(li);
  inputBox.value = "";
})
todolist.addEventListener('click', function (e) {
  if (e.target.innerHTML === "Remove") {
    todolist.removeChild(e.target.parentElement)
  }

  if (e.target.innerHTML === "Edit") {
    EditTodo = e;
    inputBox.value = e.target.previousElementSibling.innerHTML;
    inputBox.focus();
    addbtn.value = "Edit"
  }

})
