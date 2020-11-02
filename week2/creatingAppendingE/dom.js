var molly = document.createElement("h1")
molly.textContent= "Welcome to my Javascript Site"
document.body.append(molly);

var paraG = document.createElement("p")
paraG.textContent = " All of this was created with Javascript!"
document.body.append(paraG);

var myList = document.createElement("ol");
myList.textContent ="MY LIST"
document.body.append(myList)
var one = document.createElement("li");
var two = document.createElement("li");
var three = document.createElement("li");
one.textContent ="this";
two.textContent ="that";
three.textContent ="those";
myList.appendChild(one);
myList.appendChild(two);
myList.appendChild(three);



