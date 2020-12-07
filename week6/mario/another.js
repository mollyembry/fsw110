document.querySelector(".goomba2").addEventListener("keyup", function(){
    var goombaTotal = Number(document.querySelector(".goomba2").value * 5);
    var bobTotal = Number(document.querySelector(".bob2").value * 7);
    var cheepTotal = Number(document.querySelector(".cheep2").value * 11);
    document.querySelector(".totalprice").innerHTML = goombaTotal + bobTotal + cheepTotal;
});

document.querySelector(".bob2").addEventListener("keyup", function(){
    var goombaTotal = Number(document.querySelector(".goomba2").value * 5);
    var bobTotal = Number(document.querySelector(".bob2").value * 7);
    var cheepTotal = Number(document.querySelector(".cheep2").value * 11);
    document.querySelector(".totalprice").innerHTML = goombaTotal + bobTotal + cheepTotal;
});

document.querySelector(".cheep2").addEventListener("keyup", function(){
    var goombaTotal = Number(document.querySelector(".goomba2").value * 5);
    var bobTotal = Number(document.querySelector(".bob2").value * 7);
    var cheepTotal = Number(document.querySelector(".cheep2").value * 11);
    document.querySelector(".totalprice").innerHTML = goombaTotal + bobTotal + cheepTotal;
});

document.getElementsByTagName("header")[0].getElementsByTagName("h1")[0].innerHTML = "Mario's Pest Control";


var myFooter = document.createElement("footer");
myFooter.textContent ="Contact Information: "
document.body.append(myFooter)
var one = document.createElement("li");
var two = document.createElement("li");
var three = document.createElement("li");
one.textContent ="mariospestcontrol@gmail.com";
two.textContent ="mariospestcontrol.com";
three.textContent ="1234 Mario Lane";
myFooter.appendChild(one);
myFooter.appendChild(two);
myFooter.appendChild(three);
