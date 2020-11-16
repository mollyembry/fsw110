function addNumbers(a, b){
    var c= +a + +b;
    return c;
}
var adding = document.getElementById("adding");
adding.addEventListener("click", function(){
var addOne =document.getElementById("addOne").value;
var addTwo= document.getElementById("addTwo").value;
var calculated = document.getElementById("calculated");
var c = addNumbers(addOne, addTwo);
calculated.textContent = "Added calculation is: " + c;
});
//Subtract
function subNum(x, y){
    var z= +x - +y;
    return z;
}
var subtracting = document.getElementById("subtracting");
subtracting.addEventListener("click", function(){
    var subOne = document.getElementById("subOne").value;
    var subTwo = document.getElementById("subTwo").value;
    var calculated = document.getElementById("calculated");
    var z = subNum(subOne, subTwo);
    calculated.textContent ="Subtracted calulation is: " + z;
});
//Multiplication
function multiplyNum(d, e){
    var f = +d * +e;
    return f;
}
var multiplying = document.getElementById("multiplying");
multiplying.addEventListener("click", function(){
    var multiOne = document.getElementById("multiOne").value;
    var multiTwo = document.getElementById("multiTwo").value;
    var calculated = document.getElementById("calculated");
    var f =multiplyNum(multiOne, multiTwo);
    calculated.textContent ="Multiplied calulation is: " +f;
})


