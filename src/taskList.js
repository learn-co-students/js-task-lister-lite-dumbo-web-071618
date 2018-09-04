class TaskList {
  constructor(task){
    this.task = task
  }

  receiveInput() {
    const newForm = document.getElementById('create-task-form')
    newForm.addEventListener('submit', function (e) {

    e.preventDefault()

    const newInput = document.getElementById('new-task-description')
    const newTask = new Task(newInput.value)

    newForm.reset()
    newTask.showNewTask(newTask)
    })
  }
}
