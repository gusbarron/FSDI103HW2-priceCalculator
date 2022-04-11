let productName = prompt("Product Name: ");

let price = prompt("Price: ");

let quantity = prompt("Quantity: ");

console.log(productName, quantity, price);

let total = quantity*price;

const tax = 0.7;

let totalTax = total*tax;

console.log("The total for "+ quantity + " " + productName + " is "+ total);
console.log("The total including tax for "+ quantity + " " + productName + " is " + totalTax);



