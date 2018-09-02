class Task {
  constructor(description, priority){
    this.description = description
    this.priority = priority
  }

  myLi(task){
    const li = document.createElement("li")
    li.innerText = task
    const delete_button = document.createElement('button')
    delete_button.innerText = "X"
    delete_button.addEventListener('click', ()=> li.remove())
    li.append(delete_button)
    return li
  }
}
