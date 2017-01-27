//back-end logic
var sizeArray = [];
var toppingsArray = [];

var Pizza = function(size, toppings, price) {
  this.selectedSize = size;
  this.selectedToppings = toppings;
  this.price = 12;
};

Pizza.prototype.sizePrice = function() {
  if (sizeArray[0] === "Small (10 inches)") {
    this.price += 0;
  } else if (sizeArray[0] === "Medium (12 inches)") {
    this.price += 2;
    console.log(this.price);
  } else if (sizeArray[0] === "Large (14 inches)") {
    this.price += 4;
  }
};
//CAN I DO THIS AS A FOREACH LOOP INSTEAD OF IF STATEMENTS??
Pizza.prototype.toppingsPrice = function() {
  if (toppingsArray.length === 0) {
    this.price+= 0;
  } else if (toppingsArray.length === 1) {
    this.price +=2;
  } else if (toppingsArray.length === 2) {
    this.price +=4;
  } else if (toppingsArray.length === 3) {
    this.price +=6;
    console.log("i recognize 3 toppings");
  } else if (toppingsArray.length === 4) {
    this.price +=8;
  } else {
    this.price +=10;
  }
};

//front-end logic
$(document).ready(function(){
  $("form#order-form").submit(function(event){
    event.preventDefault();
    var inputtedSize = $("select.form-control").val();
    var inputtedToppings = $("input.toppings").val();
    var myPizza = new Pizza (inputtedSize, inputtedToppings, calculatedPrice);
    var calculatedPrice = myPizza.price;

    $(".results").show();

    sizeArray.push(inputtedSize);

    $("input:checkbox[name=toppings]:checked").each(function(){
      var inputtedToppings = $(this).val();
      toppingsArray.push(inputtedToppings);
      $('#toppingsResults').append(inputtedToppings + ", ");
    });

    myPizza.toppingsPrice();
    myPizza.sizePrice();

    $("#cost").text(myPizza.price);
    $("#pizzaSizeResults").text(inputtedSize);
    myPizza.price = 12;
    sizeArray = [];
    toppingsArray = [];
    // $("span#toppingsResults").val("");
    // $("input:checkbox[name=toppings]:checked").removeAttr("checked, false");
  });

});
