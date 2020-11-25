var name1 = document.getElementById("name");
var age = document.getElementById("age");
var state = document.getElementById("state");
var button = document.getElementById("enter");
var form = document.getElementById("form");

button.addEventListener("click", function() {
    alert("My name is " + name1.value + " and I am " + age.value + " years old, I live in " + state.value + ".") ;
    clearinputs(form);

});
document.body.style.backgroundColor = "pink";