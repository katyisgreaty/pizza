//back-end logic
var sizeArray = ['Small (10")', 'Medium (12")', 'Large (14")'];
var toppingsArray = ["Pepperoni", "Pineapple", "Diced tomatoes", "Pesto", "Basil", "Extra cheese", "Olives"];

var Pizza = function(size, toppings) {
  this.selectedSize = size;
  this.selectedToppings = toppings;
  this.price = 12;
}

Pizza.prototype.sizePrice = function() {
  if (this.selectedSize === sizeArray[0]) {
    this.price += 0;
  } else if (this.selectedSize === sizeArray[1]) {
    this.price += 2;
  } else if (this.selectedSize === sizeArray[2]) {
    this.price += 4;
  }
})




//front-end logic
$(document).ready(function(){
  $("form#order-form").submit(function(event){
    event.preventDefault();

    var inputtedSize = $("select#size").val();
    var myPizza = new Pizza(inputtedSize, inputtedToppings);

    $("input:checkbox[name=toppings]:checked").each(function(){
      var toppingsPicked = $(this).val();

      $('#toppingsResults').append(toppingsPicked + ", ");
      $(".results").show();
    });
  });
})
