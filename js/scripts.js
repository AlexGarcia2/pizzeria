function Pizza (size,top,name) {
  // debugger;
  this.size = size;
  this.top = top;
  this.name = name;
  this.total = 0
}

Pizza.prototype.sizeCrust = function() {
  debugger;
  //for each loop
  var sizes = ["large"];
  var crust = this.size;
  if (crust === sizes){
    return 15.00
  }
}

Pizza.prototype.topping = function() {
  if (this.top ==="pepperoni")
  return 3.00;
  // this.pepperoni = "3.00";
  //what toppings cost
}

Pizza.prototype.totalAmount = function() {
  var topping = this.topping();
  var crust = this.sizeCrust();
  total = (topping + crust);
  this.total.push(total);
  console.log(total)

}

var order = new Pizza("large","pepperoni","alex")
order.sizeCrust();
order.topping();
order.totalAmount();


// function Order(size,topping,name){
//   debugger;
//   this.size = size;
//   this.topping= topping;
//   this.name = name
//
// }

// user interface ----------------
