//back-end logic
var sizeArray = ['Small (10")', 'Medium (12")', 'Large (14")'];
var toppingsArray = ["Pepperoni", "Pineapple", "Diced tomatoes", "Pesto", "Basil", "Extra cheese", "Olives"];

var Pizza = function(size, toppings, price) {
  this.selectedSize = size;
  this.selectedToppings = toppings;
  this.price = 12;
};

// Pizza.prototype.s

Pizza.prototype.sizePrice = function() {
  if (this.selectedSize === sizeArray[0]) {
    this.price += 0;
  } else if (this.selectedSize === (sizeArray[1])) {
    this.price += 2;
  } else if (this.selectedSize === sizeArray[2]) {
    this.price += 4;
  }
};


//CAN I DO THIS AS A FOREACH LOOP INSTEAD OF IF STATEMENTS??
// Pizza.prototype.toppingsPrice = function() {
//   if (numberOfToppingsSelected === 0) {
//   } else if (numberOfToppingsSelected === 1) {
//     this.price +=2;
//   } else if (numberOfToppingsSelected === 2) {
//     this.price +=4;
//   } else if (numberOfToppingsSelected === 3) {
//     this.price +=6;
//   } else if (numberOfToppingsSelected === 4) {
//     this.price +=8;
//   } else {
//     this.price +=10;
//   }
//
// }




//front-end logic
$(document).ready(function(){
  var inputtedSize = $("#size").val();
  var numberOfToppingsSelected = $('input:checkbox:checked').length;
  var myPizza = new Pizza (inputtedSize, numberOfToppingsSelected);

  myPizza.selectedSize();
  // myPizza.toppingsPrice();

  $("form#order-form").submit(function(event){
      event.preventDefault();

      $(".results").show();
      $("input:checkbox[name=toppings]:checked").each(function(){
        var inputtedToppings = $(this).val();

        $('#toppingsResults').append(inputtedToppings + ", ");
      });
    });
    $("#pizzaSizeResults").text(inputtedSize);

})
