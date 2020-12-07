let whenTodo = document.getElementById("whenTodo");
let whatTodo = document.getElementById("whatTodo");
let todoList = document.getElementById("todoList");
let form = document.getElementById("form");
let button = document.getElementById("button");

let btn = (e) => {
    e.preventDefault();
    if (whenTodo.value != "" ) {
        let theItems = document.createElement("li");
        theItems.innerHTML = whenTodo.value + " " + whatTodo.value;
        theItems.style.border ="2px"
        theItems.style.fontSize = "15px";
        theItems.style.padding = "15px";
        theItems.style.textAlign ="center";
        theItems.style.listStyleType = "none";
        theItems.style.marginRight = "20%";
        theItems.style.marginLeft = "20%";
        theItems.style.color = "white";
        let a = document.createElement("button");
        a.textContent = "Completed";
        a.classList.add("del");
        theItems.append(a);
        todoList.append(theItems);
        form.reset();
    }else (alert("FILL OUT LIST"));
};

let del = (e) => {
     let del = document.getElementsByClassName("del");
     for(i = 0; i < del.length; i++){
         if(e.target == del[i]){
             let theItems = del[i].parentNode;
             todoList.removeChild(theItems);
         }
     }
};

button.addEventListener("click", btn);
todoList.addEventListener("click", del);