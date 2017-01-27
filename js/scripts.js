//back-end logic
var sizeArray = ['Small (10")', 'Medium (12")', 'Large (14")'];
var toppingsArray = ["Pepperoni", "Pineapple", "Diced tomatoes", "Pesto", "Basil", "Extra cheese", "Olives"];

var Pizza = function(size, toppings) {
  this.selectedSize = size;
  this.selectedToppings = toppings;
}





//front-end logic
$(document).ready(function(){
  var inputtedSize = $("select#size").val();
  var inputtedToppings = $("")

  $("form#order-form").submit(function(event){
      event.preventDefault();
      $(".results").show();
      $("input:checkbox[name=toppings]:checked").each(function(){
        var toppingsPicked = $(this).val();
        $('#toppingsResults').append(toppingsPicked + ", ");
      });
    });

})
