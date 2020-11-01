var molly = document.createElement("h1")
molly.textContent= "Welcome to my Javascript Site"
document.body.append(molly);

var paraG = document.createElement("p")
paraG.textContent = " All of this was created with Javascript!"
document.body.append(paraG);

var moreList = document.createElement("li")
moreList.textContent = "Four"
var myList = document.getElementById ("list")
myList.append(moreList);

