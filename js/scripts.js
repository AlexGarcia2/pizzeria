function Pizza (newOrder) {
  // debugger;
  this.size = size;
  this.top = top;
  this.name = name;
  this.total = 0
}
Pizza.prototype.addOrder= function(size,topping,name){
  var newOrder = new Order(size,topping,name)
}

Pizza.prototype.sizeCrust = function() {
  debugger;
  var sizes = ["large","medium","small"];
  var crust = this.size;
  // sizes.forEach(function(size){
    if(crust === sizes[0]){
    return 15.00
  }else {
    return false
  }

}

Pizza.prototype.topping = function() {
  debugger;
  console.log("topping")
  if (this.top === "pepperoni"){
  return 3.00;
  }
  // this.pepperoni = "3.00";
  //what toppings cost
}

Pizza.prototype.totalAmount = function() {
  var topping = this.topping();
  var crust = this.sizeCrust();
  total = (topping + crust);
  return total;
  console.log(total)
}
// function Order (size,topping,name)
// var order = new Pizza("large","pepperoni","alex")
// order.sizeCrust();
// order.topping();
// order.totalAmount();



// user interface ----------------
var order = new Pizza();
$(document).ready(function(){

  $("#form").click(function(event){
    $("#crustSize","#topping").change();
    // $("#topping").change();
    event.preventDefault();

    var lar = $("#large").val();
    var pepp = $("#pepp").val();
    var nam = $("#name").val();
    order.addOrder(lar,pepp,name)
  });


console.log(("#form"))
});

// $("#thankYou").on("click","div", function(){
  //need to show thank you your order has been placed
// })
