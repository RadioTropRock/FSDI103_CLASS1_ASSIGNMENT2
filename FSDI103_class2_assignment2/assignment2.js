var product = prompt("Please enter product name.");
var quantity = prompt("Please enter product quanity.");
var price = prompt("Please enter product price.");

var total = quantity * price;
var tax = total * .075
var finalTotal = total * 1.075
document.write(`<P> The total cost for  ${quantity}  ${product}'s at a cost of $ ${price} each would be $ ${total} </p>
<p> Once we add 7.5% sales tax which is $ ${tax} your final total is $ ${finalTotal}
`);

console.log (product,quantity,price, tax, total, finalTotal);