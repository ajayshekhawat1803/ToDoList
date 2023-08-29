const taskname = document.getElementById("taskname");
const addBtn = document.getElementById("addBtn");
const listcontainer = document.getElementById("listcontainer");

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
        li.appendChild(span)
        saveData() ;
    }
    taskname.value ="";
})

listcontainer.addEventListener("click", (e) => {
    if (e.target.tagName == "LI") {
        e.target.classList.toggle("checked");
        saveData() ;
    }
    if(e.target.tagName == "SPAN") {
        e.target.parentElement.remove();
        saveData() ;
    }
})
function saveData() {
    localStorage.setItem("data", listcontainer.innerHTML);
}
function displayData() {
    listcontainer.innerHTML = localStorage.getItem("data");
}
displayData();
console.log(localStorage.getItem("data"));

