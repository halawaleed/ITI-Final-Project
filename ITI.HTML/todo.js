let tasks=[];
function addTask(){
    let input=document.getElementById("todoInput").value;
    tasks.push(input);
    let li=document.createElement("li");
    li.textContent=input;
    document.getElementById("taskList").appendChild(li);
    document.getElementById("todoInput").value="";
}

function startDoing(){
    document.getElementById("todoPage").style.display="none";
    document.getElementById("allAdded").style.display="none";
    document.getElementById("tasksPage").style.display="block";

    let tasksPage=document.getElementById("tasksPage");
    for(let i=0;i<tasks.length;i++){
       let row= document.getElementById("userTasks");
        let task=document.createElement("li"); 
        task.textContent=tasks[i]; 
        let checkbox=document.createElement("input"); 
        checkbox.type="checkbox"; 
        row.appendChild(task).appendChild(checkbox); 
    }
}