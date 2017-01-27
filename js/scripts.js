//bastard movie and pizza child

// Business logic goes here.....
var sizeArray = ["Small (10 inch)", "Medium (12 inch)", "Large (14 inch)"];
var toppingsArray = ["Pepperoni", "Pineapple", "Diced tomatoes", "Pesto", "Basil", "Extra cheese", "Olives"]


var Pizza = function(size, toppings, price){
  this.selectedsize = size;
  this.selectedToppings = toppings;
  this.price = 12;
};

Pizza.prototype.sizePrice = function() {
  if((this.selectedSize === sizeArray[0]) || (this.selectedSize === sizeArray[1])) {
    this.price;
  } else {
    this.price += 4;
    console.log("large price calculated");
  }
}

Pizza.prototype.toppingsPrice = function() {
  if((this.selectedToppings === toppingsArray[0]) || (this.selectedTime === timeArray[1]) || (this.selectedTime === timeArray[2]) || (this.selectedTime === timeArray[3]) || (this.selectedTime === timeArray[4]) || (this.selectedTime === timeArray[5]) || (this.selectedTime === timeArray[6])) {
    this.price += 2;
    console.log("one topping!");
  } else {
  }
}
// Ticket.prototype.ageDiscount = function() {
// if(this.selectedUserAge === "Senior (Age 61 or above)") {
//   this.price -= 5;
//   } else {
// }
// };
//
// // User logic goes here ....
// $(document).ready(function(){
//   $("form#tickets").submit(function(event){
//     event.preventDefault();
//
//     var inputtedName = $("input#name").val();
//     var inputtedEmail = $("input#email").val();
//     var inputtedMovie = $("select#movie").val();
//     var inputtedNumber = $("input#number").val();
//     var inputtedTime = $("select#time").val();
//     var inputtedUserAge = $("select#age").val();
//     var myTicket = new Ticket(inputtedName, inputtedEmail, inputtedMovie, inputtedNumber, inputtedTime, inputtedUserAge);
//
//     myTicket.classicDiscount();
//     myTicket.matineeDiscount();
//     myTicket.ageDiscount();
//
//     var infoOutput = ("Your Name: " + myTicket.selectedName +
//                       "<li>" + "Your email: " + myTicket.selectedEmail +
//                       "</li><li>" + "Your movie: " + myTicket.selectedMovie +
//                       "</li><li>" + " Number of tickets booked: " +  myTicket.selectedNumber +
//                       "</li><li>" + " Showtime: " +myTicket.selectedTime +
//                       "</li><li>" + " Ticket type: " + myTicket.selectedUserAge);
//
//     var totalPrice = "Your total price is $" + (myTicket.price * ($("input#number").val())) + ".00";
//
//   $("span.output").last().append("<li>" + infoOutput + "</li><li>" + totalPrice + "</li>");
//
//   // $("input#new-first-name").val("");
//
//   function resetFields() {
//       $("select#movie").val("");
//       $("input#number").val("");
//       $("select#time").val("");
//       $("select#age").val("");
//
//   }
//
//   resetFields();
//
//
//   });

// });
