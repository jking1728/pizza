// Business Logic

function Pizza(size, toppings) {
    this.size = size;
    this.toppings = toppings;
    this.price = 10;
};

Pizza.prototype.pizzaSize = function() {
    if (this.size === "medium") {
        this.price += 3; 
    } else if (this.size === "large") {
        this.price += 6;
    } else {
        this.price += 0;
    }
}

Pizza.prototype.pizzaToppings = function() {
    if (this.toppings)
}



$(document).ready(function() {
    var myPizza = new Pizza(size, toppings);

})