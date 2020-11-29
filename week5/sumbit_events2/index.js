var name1 = document.getElementById("name");
var last = document.getElementById("last");
var age1 = document.getElementById("age");
var gMale = document.getElementById("gMale");
var gFemale = document.getElementById("gFemale");
var vegan = document.getElementById("vegan");
var kosher = document.getElementById("kosher");
var lactose = document.getElementById("lactose");
var button = document.getElementById("enter");
var form = document.getElementById("form");


function femaleMale() {
    if (gMale.checked) {
        return "male";
    } else if (gFemale.checked) {
        return "female";
    }
}

function diet() { 
    if (vegan.checked && kosher.checked && lactose.checked === true) {
        return "Vegan, Kosher, Lactose";
    } else if (vegan.checked && kosher.checked === true) {
        return "Vegan, Kosher";
    }else if (kosher.checked && lactose.chekced === true) {
        return "Kosher, Lactose";
    } else if (vegan.checked && lactose.checked === true) {
        return "Vegan, Lactose";
    } else if (kosher.checked === true) {
        return "Kosher";
    } else if (vegan.checked === true) {
        return "Vegan";
    } else if (lactose.checked === true){
        return "Lactose";
    }
}


button.addEventListener("click", function(){
alert("First Name: " + name1.value + "Last Name: " + last.value + "Age: " + age1.value + " Gender: " + fMale() + "Diet Restrictions: " + diet());
clearinputs(form);
});

document.body.style.backgroundColor = "pink";