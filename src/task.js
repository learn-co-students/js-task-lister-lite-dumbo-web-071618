class Task {
  constructor(description){
    this.description = description
  }

  myLi(task){
    const li = document.createElement("li")
    li.innerText = task
    li.id = task.id
    const delete_button = document.createElement('button')
    delete_button.innerText = "X"
    delete_button.addEventListener('click', console.log(this))
    li.append(delete_button)
    return li
  }
}
