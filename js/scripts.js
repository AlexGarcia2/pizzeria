function Pizza (size,top,name) {
  // debugger;
  this.size = size;
  this.top = top;
  this.name = name;
 this.total = 0
}
// Pizza.prototype.addOrder = function (order){
//   Pizza.push(order)
// }
console.log(Pizza)

Pizza.prototype.sizeCrust = function (){
  debugger;
  var sizes = ["large"];
  var crust = this.size;
  if (crust === sizes[i]){

  }


}

Pizza.prototype.topping = function (){
  if (this.topping ==="pepperoni")
  return false;
  // this.pepperoni = "3.00";
  //what toppings cost
}

Pizza.prototype.totalAmount = function () {
  total = this.total;
  total = (this.size + this.pepperoni);
  return total;
  console.log("total")

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
