function Pizza (size,topping,name) {
  this.sizeCrust = size;
  this.topping = topping;
  this.name = name;
 this.total = null
}

Pizza.prototype.sizeCrust = function (size){
  this.large = 15.00
  this.medium = 12.00
  this.small = 10.00
  // what sizes cost what amount
}

Pizza.prototype.total = function () {
  total = this.total();
  total = (this.size + this.pepperoni);
  return true;

}

Pizza.prototype.topping = function (){

  this.pepperoni = 3.00
  //what toppings cost
}
// function Order(size,topping,name){
//   this.size = size;
//   this.topping= topping;
//   this.name = name
// }

// user interface ----------------
