
document.addEventListener("DOMContentLoaded", () => {
  const taskList = new TaskList();
  const form = document.getElementById('create-task-form')

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    let input = document.getElementById('new-task-description');
    const task = new Task(input.value);
    let tasks = document.getElementById("tasks")
    console.log(task)
    tasks.append(task.myLi(task.description))
  }  )
});
