document.addEventListener("DOMContentLoaded", () => {

//queries
const form = document.getElementById('create-task-form') //the form to input the task
const list = document.getElementById('tasks') //appending each new task to the ul tag
let input = document.getElementById('new-task-description') //to get the input of the form

//event listeners
form.addEventListener("submit", addTask) //form listens to a submit event
list.addEventListener("click", deleteTask)

function addTask(e) { // e = event object
  e.preventDefault()
  let newTask = new Task(input.value) //can't do e.target.input.value bc can't call input on the form itself
  input.value = " "
  let taskItem = document.createElement("li") //created an li element
  let deleteButton = document.createElement("button") //created a deleteButton element
  deleteButton.innerText = "X"
  taskItem.innerText = `${newTask.name}` //set the li to the value of the input
  taskItem.append(deleteButton) //appended button to task item
  list.append(taskItem) //appended the li (with input text) to the ul element
}

function deleteTask(e) {
  let deleteItem = e.target.parentElement //get parent element of the deleteButton(the li)
  deleteItem.remove()
}

});

//Questions:
//how to use MVC organization with this lab
//why is list the listener of the click and not the task item - bc you want event listeners on a bigger area?
