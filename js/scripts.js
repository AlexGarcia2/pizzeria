function Pizza () {
  //name of order
  // what pizza size is
  //what sizes did the cust order
  //topping
 this.total = null;
}

Pizza.prototype.size = function (){
  // what sizes cost what amount
}

Pizza.prototype.total = function () {
  // calculate topping amount

}

Pizza.prototype.topping = function (){
  //what toppings cost
}
function Order(size,topping,name){
  this.size = size;
  this.topping= topping;
  this.name = name
}
