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
    console.log(data);
    console.log(data);
    let newData = data;
    String.prototype.replaceAt = function(index, replacement) {
        if (index >= this.length) {
            return this.valueOf();
        }
        var chars = this.split('');
        chars[index] = replacement;
        return chars.join('');
    }

    if (e.currentTarget.classList == "box") {
        let item = localStorage.getItem(newData);
        newData = data.replaceAt(0, '0');
        document.getElementById(data).id = newData;
        localStorage.setItem(newData, `${item}`);
        if(!(data == newData)) {
            localStorage.removeItem(data);
        }

    }
    else if (e.currentTarget.classList == "box inProgress") {
        let item = localStorage.getItem(newData);
        newData = data.replaceAt(0, '1');
        document.getElementById(data).id = newData;
        localStorage.setItem(newData, `${item}`);
        if(!(data == newData)) {
            localStorage.removeItem(data);
        }
    }
    else if (e.currentTarget.classList == "box done") {
        let item = localStorage.getItem(newData);
        newData = data.replaceAt(0, '2');
        document.getElementById(data).id = newData;
        localStorage.setItem(newData, `${item}`);
        if(!(data == newData)) {
            localStorage.removeItem(data);
        }
    }
    e.currentTarget.appendChild(document.getElementById(newData));
}
function drag(e) {
    e.dataTransfer.setData("text", e.target.id);
}
function allowDrop(e) {
    e.preventDefault();
}
function saveTask() {
    let taskName = document.getElementById("tytul").value;
    let taskBody = document.getElementById("description").value;
    if (taskName == "" || taskBody == "") {
        alert("Któreś pole jest puste, spróbuj jeszcze raz!");
    }
    else {
        let mainContainer = document.getElementById("toDo");
        let idValue = localStorage.getItem('id');
        if (idValue === null) {
            localStorage.setItem('id', 0)
            idValue = localStorage.getItem('id');
            localStorage.setItem('id', parseInt(idValue) + 1);
            localStorage.setItem("0" + idValue, `
        <div class="element updateElement" id="0${idValue}" draggable="true" ondragstart="drag(event)">
        <h3>${taskName}</h3>
        <h5>${taskBody}</h5>
        </div>
        `)
        mainContainer.innerHTML += `
        <div class="element updateElement" id="0${idValue}" draggable="true" ondragstart="drag(event)">
        <h3>${taskName}</h3>
        <h5>${taskBody}</h5>
        </div>
        `;
        }
        else {
            localStorage.setItem('id', parseInt(idValue) + 1);
            localStorage.setItem("0" + idValue, `
        <div class="element updateElement" id="0${idValue}" draggable="true" ondragstart="drag(event)">
        <h3>${taskName}</h3>
        <h5>${taskBody}</h5>
        </div>
        `)
        mainContainer.innerHTML += `
        <div class="element updateElement" id="0${idValue}" draggable="true" ondragstart="drag(event)">
        <h3>${taskName}</h3>
        <h5>${taskBody}</h5>
        </div>
        `;
        }
    }
}
window.onload = () => {
    let mainContainer = document.getElementById("toDo");
    let secondContainer = document.getElementById("inProgressID");
    let thirdContainer = document.getElementById("doneID");
    let storedInput;
    for (var key in localStorage) {
        if (key.charAt(0) == 0) {
            storedInput = localStorage.getItem(`${key}`)
            mainContainer.innerHTML += storedInput;
        }
        else if (key.charAt(0) == 1) {
            storedInput = localStorage.getItem(`${key}`)
            secondContainer.innerHTML += storedInput;
        }
        else if (key.charAt(0) == 2) {
            storedInput = localStorage.getItem(`${key}`)
            thirdContainer.innerHTML += storedInput;
        }
    }
};