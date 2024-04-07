//make into class
let textInput = document.querySelector("#input-text")
let addTaskBtn = document.querySelector("#add-btn")

let editTaskBtn, deleteTaskBtn;

let taskBar = document.querySelector("#task-bar");

window.addEventListener("load", ()=>{
})
//input text
//add text as task name
addTaskBtn.addEventListener("click", ()=>{
    let taskName = textInput.value;
    createTask(taskName);
    let taskList = Array.from(taskBar.children)

    taskList.forEach((e)=>{
        let task = Array.from(e.children);
        task.forEach((element) =>{
            if (element.id === "done-task"){
                element.addEventListener("click", (e) =>{
                    console.log(e)
                    console.log(taskBar)
                })
            }
            else if (element.id === "edit-task"){
                element.addEventListener("click", (e) =>{
                    console.log("edit")
                })
            }
        })
    })
    
    

})



//let edit text name
//let delete with done

function createTask(taskTitle){
    //task containing div
    let taskDiv = document.createElement("div")
    taskDiv.id = "task-list";

    //task title
    let taskName = document.createElement("div")
    taskName.id = "task-title";
    taskName.innerText = taskTitle;

    //task edit button
    let editTaskNameBtn = document.createElement("button")
    editTaskNameBtn.id = "edit-task";
    editTaskNameBtn.innerText = "Edit"

    //task delete button
    let deleteTaskNameBtn = document.createElement("button")
    deleteTaskNameBtn.id = "done-task";
    deleteTaskNameBtn.innerText = "Done"

    //to task bar apend task div
    taskBar.appendChild(taskDiv)
    //to task div append text name, buttons
    taskDiv.appendChild(taskName)
    taskDiv.appendChild(editTaskNameBtn)
    taskDiv.appendChild(deleteTaskNameBtn)
}
