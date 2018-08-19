function isNumber(input) {
    "use strict";
    return input !== null && input.trim() !== "" && !isNaN(input);
}

var aSideLengthInput = prompt("Input a length:");
var bSideLengthInput = prompt("Input b length:");
var angleInput = prompt("Input angle:");
var aSideLength = Number(aSideLengthInput);
var bSideLength = Number(bSideLengthInput);
var angle = Number(angleInput);

var result = "";
if (isNumber(aSideLengthInput) && isNumber(bSideLengthInput) && isNumber(angleInput) && aSideLength > 0 && bSideLength > 0 && angle > 0 && angle < 180) {
    var cSideLength = Math.sqrt(Math.pow(aSideLength, 2) + Math.pow(bSideLength, 2) - 2  * aSideLength * bSideLength * Math.cos(Math.PI / 180 * angle));
    var perimeter = aSideLength + bSideLength + cSideLength;
    var square = Math.sqrt(perimeter * (perimeter - aSideLength) * (perimeter - bSideLength) * (perimeter - cSideLength));
    
    result += "c length: " + Number(cSideLength.toFixed(2)) + "\n";
    result += "Triangle perimeter: " + Number(perimeter.toFixed(2)) + "\n";
    result += "Triangle square: " + Number(square.toFixed(2)) + "\n";
} else {
    result = "Invalid data";
}

console.log(result);