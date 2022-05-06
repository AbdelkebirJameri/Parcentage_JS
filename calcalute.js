var numberX = document.getElementById("numX");
var numberY = document.getElementById("numY");
var result = document.getElementById("resultat");
var form = document.getElementById("formid");

form.addEventListener("submit", function (presecntage) {

    if (!numberX.value || !numberY.value) {

        alert("please entre number to calcalute parcentage!");
    }
    else {

        var x = parseFloat(numberX.value);
        var y = parseFloat(numberY.value);

        var r= (x/y)*100 
        var rr=r.toFixed(3)
        result.innerText= "Result:" + "  " + rr + "%";

        presecntage.preventDefault();
    }





});