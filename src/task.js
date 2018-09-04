class Task {
  constructor(content){
    this.content = content
  }

  showNewTask(task) {
    const listOfTasks = document.getElementById('tasks')
    const taskContent = document.createElement('p')
    taskContent.innerHTML = task.content

    const deleteButton = document.createElement('button')
    deleteButton.innerHTML = 'X'

    deleteButton.addEventListener('click', e => {
      taskContent.innerHTML = ''
    })

    listOfTasks.append(taskContent)
    taskContent.append(deleteButton)
  }
}
