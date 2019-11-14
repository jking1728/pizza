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
    }
    return this.price;
}


// UI

$(document).ready(function() {
    $("#pizzaForm").submit(function(event) {
        event.preventDefault();
        var toppingsArray = [];
        var sizeInput = $("select#pizzaSize").val();
        $("input:checkbox[name=toppings]:checked").each(function() {
            toppingsArray.push($(this).val());
        });
        var myPizza = new Pizza(sizeInput, toppingsArray);
        var finalPrice = myPizza.getPrice();
        console.log(finalPrice);
        console.log(sizeInput);
        $("form#pizzaForm").toggle();
        $("div#reciept").toggle();
        $("span#receiptSize").text(sizeInput);
        $("span#receiptToppings").text(toppingsArray);
        $("span#receiptPrice").text(finalPrice);
    });
});