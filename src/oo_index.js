document.addEventListener("DOMContentLoaded", () => {
  // const taskList = new TaskList();
  let taskForm = document.querySelector("#create-task-form");
  let taskList = document.querySelector("#tasks")

  taskForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let taskInput = document.querySelector("#new-task-description");
    let taskLi = document.createElement("li");
    let deleteButton = document.createElement("button");
    let prioList = document.createElement("select")
    prioList.innerHTML = `
      <option data-num="1" value="red">High</option>
      <option data-num="2" value="yellow">Medium</option>
      <option data-num="3" value="green">Low</option>
    `
    
    let task = new Task(taskInput.value);

    deleteButton.innerText = "x";
    taskLi.innerHTML = task.description;
    taskLi.append(deleteButton);
    taskLi.appendChild(prioList)
    taskList.append(taskLi);

    let dropdowns = document.querySelectorAll("select");

    dropdowns.forEach((element) => {
      element.addEventListener("change", (event) => {
        event.target.parentNode.style.color = event.target.value;
        switch (event.target.value) {
          case "red":
            taskLi.dataset.num = 1
            break;
          case "yellow":
            taskLi.dataset.num = 2
            break;
          case "green":
            taskLi.dataset.num = 3
            break;
          default:
        }


        let htmlArr = [...taskList.children];
        taskList.children = [];
        htmlArr.sort((a, b) => {return parseInt(a.dataset.num) - parseInt(b.dataset.num)}).forEach(ele => taskList.appendChild(ele))
      })
    })

    deleteButton.addEventListener("click", () => {
      taskLi.remove()
    })

  })


});
