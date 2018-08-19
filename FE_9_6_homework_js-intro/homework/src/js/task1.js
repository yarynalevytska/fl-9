function isNumber(input) {
    "use strict";
    return input !== null && input.trim() !== "" && !isNaN(input);
}

var priceInput = prompt("Input amount of money:");
var discountInput = prompt("Input the discount:");
var price = Number(priceInput);
var discount = Number(discountInput);

var result = "";
if (isNumber(priceInput) && isNumber(discountInput) && price > 0 && discount >= 0 && discount < 100) {
    var priceWithDiscount = price - (price * discount / 100);
    var saved = price - priceWithDiscount;
    result += "Price without discount: " + Number(price.toFixed(2)) + "\n";
    result += "Discount: " + Number(discount.toFixed(2)) + "\n";
    result += "Price with discount: " + Number(priceWithDiscount.toFixed(2)) + "\n";
    result += "Saved: " + Number(saved.toFixed(2)) + "\n";
} else {
    result = "Invalid data";
}

console.log(result);
