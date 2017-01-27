//back-end logic
var sizeArray = ['Small (10")', 'Medium (12")', 'Large (14")'];
var toppingsArray = [];

var Pizza = function(size, toppings) {
  this.selectedSize = size;
  this.selectedToppings = toppings;
  this.price = 12;
};

Pizza.prototype.sizePrice = function() {
  if (this.selectedSize === sizeArray[0]) {
    this.price += 0;
  } else if (this.selectedSize === sizeArray[1]) {
    this.price += 2;
  } else if (this.selectedSize === sizeArray[2]) {
    this.price += 4;
  }
};

//CAN I DO THIS AS A FOREACH LOOP INSTEAD OF IF STATEMENTS??
Pizza.prototype.toppingsPrice = function() {
  if (this.selectedToppings === (toppingsArray.length - toppingsArray.length)) {
  } else if (this.selectedToppings === toppingsArray.length - (toppingsArray.length-1)) {
    this.price +=2;
  } else if (this.selectedToppings === toppingsArray.length - (toppingsArray.length-2)) {
    this.price +=4;
  } else if (this.selectedToppings === toppingsArray.length - (toppingsArray.length-3)) {
    this.price +=6;
  } else if (this.selectedToppings === toppingsArray.length - (toppingsArray.length-4)) {
    this.price +=8;
  } else {
    this.price +=10;
  }
};




//front-end logic
$(document).ready(function(){
  var inputtedSize = $("select#size").val();
  var numberOfToppingsSelected = toppingsNumber
  var toppingsNumber = $('input:checkbox:checked').length;
  var myPizza = new Pizza (inputtedSize, numberOfToppingsSelected);


  $("form#order-form").submit(function(event){
      event.preventDefault();

      myPizza.sizePrice();
      myPizza.toppingsPrice();

      $(".results").show();

      $("input:checkbox[name=toppings]:checked").each(function(){
        var inputtedToppings = $(this).val();
        toppingsArray.
        $('#toppingsResults').append(inputtedToppings + ", ");
      });

      $("#pizzaSizeResults").text(inputtedSize);
    });

})
