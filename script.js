//make into class
let textInput = document.querySelector("#input-text")

let addTaskBtn = document.querySelector("#add-btn")
let body = document.querySelector("body")
let editTaskBtn, deleteTaskBtn;

let taskBar = document.querySelector("#task-bar");

window.addEventListener("load", ()=>{
})
//input text
//add text as task name
addTaskBtn.addEventListener("click", ()=>{
    console.log(textInput.value)
    let taskName = textInput.value;
    if(taskName){
        createTask(taskName);
        textInput.value = "Write a task here"
    }
    let taskList = Array.from(taskBar.children)

    taskList.forEach((taskBlock)=>{
        let task = Array.from(taskBlock.children);
        task.forEach((element) =>{
            if (element.id === "done-task"){
                element.addEventListener("click", () =>{
                    taskBar.removeChild(taskBlock)
                })
            }
            else if (element.id === "edit-task"){
                element.addEventListener("click", (e) =>{
                    let taskTitle = taskBlock.children[0].innerHTML;
                    //create text edit panel and append to concrete task
                    if (taskBlock.children.length < 4){
                        createTextEdit(taskTitle, taskBlock)
                    }

                    let saveTaskTitle = document.querySelector("#text-change-btn")
                    let editedTaskTitle = document.querySelector("#text-change-area")
                    
                    saveTaskTitle.addEventListener("click", () =>{
                        if(editedTaskTitle.value){
                            //task name change if
                            taskBlock.children[0].innerHTML = editedTaskTitle.value;
                        }
                        //after saving we remove option to change name again
                        saveTaskTitle.remove()
                        editedTaskTitle.remove()
                    })
                    //removes text when preparing to enter
                    editedTaskTitle.addEventListener("focus", ()=>{
                        editedTaskTitle.value = ""
                    })

                })
            }
        })
    })
})

textInput.addEventListener("focus", ()=>{
    textInput.className = "input-txt";
    textInput.value = ""
})

textInput.addEventListener("focusout", ()=>{
    textInput.className = "temporary-text";
})


function createTextEdit(textToEdit, taskBox){
    let container = document.createElement("div");
    container.id = "text-change-container"

    let textArea = document.createElement("textarea");
    textArea.id = "text-change-area"
    textArea.innerHTML = textToEdit;


    let btn = document.createElement("button");
    btn.id = "text-change-btn"

    btn.innerHTML = "Save"

    //needed as argument to refer to it outside function
    taskBox.append(textArea);
    taskBox.append(btn);
}

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
