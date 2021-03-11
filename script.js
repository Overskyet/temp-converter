"use strict";
function tempConvert() {

    let leftSelectArea = document.getElementById("leftSelectArea").value;
    let rightSelectArea = document.getElementById("rightSelectArea").value;
    let temperatureInFahr;
    let temperatureInCels;
    let result;

    switch (true) {

        case document.getElementById("tempValue").value === "":

            result = "Please enter a number";
            document.getElementById("getResult").innerHTML = result;
            break;

        case leftSelectArea === "leftFahrOption" && rightSelectArea === "rightCelsOption":

            temperatureInFahr = document.getElementById("tempValue").value;
            temperatureInCels = (temperatureInFahr - 32) * (5 / 9);
            result = "Temp in Cels is " + Math.round(temperatureInCels) + "C";
            document.getElementById("getResult").innerHTML = result;
            break;

        case leftSelectArea === "leftCelsOption" && rightSelectArea === "rightFahrOption":

            temperatureInCels = document.getElementById("tempValue").value;
            temperatureInFahr = (temperatureInCels * (9 / 5)) + 32;
            result = "Temp in Fahr is " + Math.round(temperatureInFahr) + "F";
            document.getElementById("getResult").innerHTML = result;
            break;

        case leftSelectArea === "leftFahrOption" && rightSelectArea === "rightFahrOption":

            temperatureInFahr = document.getElementById("tempValue").value;
            result = "Temp in Fahr is " + temperatureInFahr + "F";
            document.getElementById("getResult").innerHTML = result;
            break;

        case leftSelectArea === "leftCelsOption" && rightSelectArea === "rightCelsOption":

            temperatureInCels = document.getElementById("tempValue").value;
            result = "Temp in Cels is " + temperatureInCels + "C";
            document.getElementById("getResult").innerHTML = result;
            break;
    }
}

/*
    function tempConvert() {
        
        let leftSelectArea = document.getElementById("leftSelectArea").value;
        let rightSelectArea = document.getElementById("rightSelectArea").value;
        let temperatureInFahr;
        let temperatureInCels;
        let result;
    
        if (leftSelectArea === "leftFahrOption" && rightSelectArea === "rightCelsOption") {
            temperatureInFahr = document.getElementById("tempValue").value;
            temperatureInCels = (temperatureInFahr - 32) * (5 / 9);
            result = "Temp in Cels is " + Math.round(temperatureInCels) + "C";
            document.getElementById("getResult").innerHTML = result;
        
        } else if (leftSelectArea === "leftCelsOption" && rightSelectArea === "rightFahrOption") {
            temperatureInCels = document.getElementById("tempValue").value;
            temperatureInFahr = (temperatureInCels * (9/5)) + 32;
            result = "Temp in Fahr is " + Math.round(temperatureInFahr) + "F";
            document.getElementById("getResult").innerHTML = result;
        
        } else if (leftSelectArea === "leftFahrOption" && rightSelectArea === "rightFahrOption") {
            temperatureInFahr = document.getElementById("tempValue").value;
            result = "Temp in Fahr is " + temperatureInFahr + "F";
            document.getElementById("getResult").innerHTML = result;
        
        } else {
            temperatureInCels = document.getElementById("tempValue").value;
            result = "Temp in Cels is " + temperatureInCels + "C";
            document.getElementById("getResult").innerHTML = result;
        }
    }
*/