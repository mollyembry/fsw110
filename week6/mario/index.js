function multiplyNum(d, e){
    var f = +d * +e;
    return f;
}
 var multiOne = document.getElementById("multi1");
     goomButton.addEventListener("click", function(){
    var goombaOne = document.getElementById("goomba").value;
    var goombaTwo = document.getElementById("goomba2").value;
    var calculated = document.getElementById("calculated");
    var f =multiplyNum(goombaOne, goombaTwo);
    calculated.textContent ="Goomba Price Total: " +f;
     })
     function multiplyBob(d, e){
        var v = +d * +e;
        return v;
     }
     
     var multiTwo = document.getElementById("multi2");
         bobButton.addEventListener("click", function(){
        var bobOne = document.getElementById("bobomb").value;
        var bobTwo = document.getElementById("bobomb2").value;
        var calculatedTwo = document.getElementById("calculated2");
        var v =multiplyBob(bobOne, bobTwo);
        calculatedTwo.textContent ="Bob Omb Price Total: " +v;
         });
         function multiplyCheep(d, e){
            var g = +d * +e;
            return g;
         }

    var multiThree = document.getElementById("multi3");
         cheepButton.addEventListener("click", function(){
        var cheepOne = document.getElementById("cheep").value;
        var cheepTwo = document.getElementById("cheep2").value;
        var calculatedThree = document.getElementById("calculated3");
        var g =multiplyCheep(cheepOne, cheepTwo);
        calculatedThree.textContent ="Cheep Cheep Price Total: " +g;
         })
         
         
 function addNumbers(a, b, e){
 var c= +a + +b + +e;
  return c;
 }
var adding = document.getElementById("total");
alltotal.addEventListener("click", function(){
var f =multiplyNum(goombaOne, goombaTwo);  
var v =multiplyBob(bobOne, bobTwo);
var g =multiplyCheep(cheepOne, cheepTwo);
var c = addNumbers(f, v, g);
fullprice.textContent="Complete Total: " +c;
});


    
    