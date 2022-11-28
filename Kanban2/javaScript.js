function createNewTask() {
    let toDo = document.getElementById("toDo");
    let inProgress = document.getElementById("inProgressID");
    let done = document.getElementById("doneID");
    let doc = document.getElementById("docID");
    if (doc.style.display === "none") {
        doc.style.display = "block";
        done.style.display = "none";
        inProgress.style.display = "none";
        toDo.style.display = "none"
    }
    else {
        doc.style.display = "none";
        done.style.display = "block";
        inProgress.style.display = "block";
        toDo.style.display = "block";
    }
}

function drop(e) {
    e.preventDefault();
    var data = e.dataTransfer.getData("text");
    e.currentTarget.appendChild(document.getElementById(data));
}
function drag(e) {
    e.dataTransfer.setData("text", e.target.id);
}
function allowDrop(e) {
    e.preventDefault();
}
function saveTask(){
    let mainContainer = document.getElementById("toDo");
    let taskName = document.getElementById("tytul").value;
    let taskBody = document.getElementById("description").value;
    if(taskName == "" || taskBody == "")
    {
        alert("Któreś pole jest puste, spróbuj jeszcze raz!");
    }
    else
    {
        mainContainer.innerHTML += `
        <div class="element updateElement" id="${taskName.toLowerCase().split(" ").join("")}" draggable="true" ondragstart="drag(event)">
        <h3>${taskName}</h3>
        <h5>${taskBody}</h5>
        </div>
        `
    }
}