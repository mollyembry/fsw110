var nav = document.createElement("nav");
document.body.append(nav);
var nav1 = document.createElement("a");
var nav2 = document.createElement("a");
var nav3 = document.createElement("a");
nav1.href ="./new.html";
nav2.href ="./new.html";
nav3.href="./new.html";
nav1.textContent ="Home";
nav2.textContent ="New Items";
nav3.textContent ="About"
nav1.style.margin ="10px"
nav2.style.margin ="10px";
nav3.style.margin ="10px";
nav.appendChild(nav1);
nav.appendChild(nav2);
nav.appendChild(nav3);


var molly = document.createElement("h1")
molly.textContent= "This is my h1 tag"
document.body.append(molly);

var paraG = document.createElement("p")
paraG.textContent = " This is my P tag"
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

var myFoot = document.createElement("footer")
myFoot.textContent = "This is my footer"
document.body.append(myFoot);