
document.addEventListener("DOMContentLoaded", () => {
  const taskList = new TaskList();
  const form = document.getElementById('create-task-form')

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    let input = document.getElementById('new-task-description');
    let priorityLevel = document.getElementById('priority-level')
    const task = new Task();
    task.description = input.value
    task.priority =  priorityLevel.value
    console.log(task)
    let tasks = document.getElementById("tasks")
    tasks.append(task.myLi(`${task.description} priority level : ${task.priority}`))
    form.reset()
  }  )
});
