// Business Logic

function Pizza(size, toppings) {
    this.size = size;
    this.toppings = toppings;
    this.price = 10;
};

Pizza.prototype.getPrice = function() {
    this.toppings.forEach(function(topping) {
        this.price += 1;
    });
    if (this.size === "medium") {
        this.price += 3; 
    } else if (this.size === "large") {
        this.price += 6;
    } else {
        this.price += 0;
    }
    return this.price;
}


// UI


$(document).ready(function() {
    $("#pizzaForm").submit(function(event) {
        event.preventDefault();
        var toppingsInput = $("input:checkbox[name=toppings]:checked");
        var toppingsArray = [];
        var sizeInput = $("select#pizzaSize").val();
        toppingsInput.forEach(function(topping) {
            toppingsArray.push(topping.val());
        });
        var myPizza = new Pizza(sizeInput, toppingsArray);
        var price = myPizza.getPrice();
        
    });
    
    
    

});