var theSquare = document.getElementById("the-square");
theSquare.style.border ="3px solid black";
theSquare.addEventListener("mouseover", function() {
    theSquare.style.backgroundColor = "blue";
});
theSquare.addEventListener("mousedown", function() {
    theSquare.style.backgroundColor = "red"
});
theSquare.addEventListener("mouseup", function() {
    theSquare.style.backgroundColor = "yellow";
});
theSquare.addEventListener("dblclick", function(){
    theSquare.style.backgroundColor = "green";
});
theSquare.addEventListener("wheel", function(){
    theSquare.style.backgroundColor = "orange";
});
document.addEventListener("keydown", function(event){
    if (event.code == "KeyB") {
        theSquare.style.backgroundColor = "blue";
    } else if (event.code == 'KeyR') {
        theSquare.style.backgroundColor = "red";
    } else if (event.code == "KeyY") {
        theSquare.style.backgroundColor = "yellow";
    } else if (event.code == "KeyG") {
        theSquare.style.backgroundColor = "green";
    } else if (event.code == "KeyO") {
        theSquare.style.backgroundColor = "orange"
    } else {console.log("Acceptable keys incluse: b, r, y, g, o");}
});