function Pizza (size,top,name) {
  // debugger;
  this.size = size;
  this.top = top;
  this.name = name;
  this.total = 0
}

Pizza.prototype.sizeCrust = function() {
  // debugger;
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

// var order = new Pizza("large","pepperoni","alex")
// order.sizeCrust();
// order.topping();
// order.totalAmount();



// user interface ----------------

$(document).ready(function(){

  $("#form").click(function(event){
    event.preventDefault();




  });

console.log(("#form"))



});
