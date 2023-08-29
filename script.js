const taskname = document.getElementById("taskname");
const addBtn = document.getElementById("addBtn");
const listcontainer = document.getElementById("listcontainer");
const container = document.querySelector(".container");
const contmaxheight = document.querySelector("body").clientHeight - 200;
const clrall = document.querySelector("#clrall");


function saveData() {
    localStorage.setItem("data", listcontainer.innerHTML);
}

function displayData() {
    listcontainer.innerHTML = localStorage.getItem("data");
}

function checkscroll() {
    if (container.clientHeight < contmaxheight) {
        listcontainer.style.overflowY = "auto"
    }
    else {
        listcontainer.style.overflowY = "scroll"
    }
}

function checkvisibility() {
    if (listcontainer.childElementCount < 3) {
        clrall.style.display = "none";
    }
    else{
        clrall.style.display = "block";
    }
}

addBtn.addEventListener("click", () => {
    if (taskname.value === "") {
        alert("Please enter task first");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = taskname.value;;
        listcontainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "x";
        li.appendChild(span);
        saveData();
        checkscroll();
        checkvisibility();
    }
    taskname.value = "";
})

listcontainer.addEventListener("click", (e) => {
    if (e.target.tagName == "LI") {
        e.target.classList.toggle("checked");
        saveData();
        checkscroll();
        checkvisibility();
    }
    if (e.target.tagName == "SPAN") {
        e.target.parentElement.remove();
        saveData();
        checkscroll();
        checkvisibility();
    }
})

clrall.addEventListener("click", () => {
    listcontainer.innerHTML = "";
    saveData();
    checkscroll();
    checkvisibility();
})

displayData();
checkscroll();
checkvisibility();

