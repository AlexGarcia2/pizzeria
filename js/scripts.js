function Pizza (size,topping,name) {
  debugger;
  this.size = size;
  this.topping = topping;
  this.name = name;
 this.total = null
}
// Pizza.prototype.addOrder = function (order){
//   Pizza.push(order)
// }

Pizza.prototype.sizeCrust = function (){
  if (this.size === "large"){
  return 15.00
  }
  console.log("size");

}

Pizza.prototype.topping = function (){

  this.pepperoni = 3.00
  //what toppings cost
}

Pizza.prototype.total = function () {
  total = this.total;
  total = (this.size + this.pepperoni);
  return total;
  console.log("total")

}


// function Order(size,topping,name){
//   debugger;
//   this.size = size;
//   this.topping= topping;
//   this.name = name
//
// }

// user interface ----------------
