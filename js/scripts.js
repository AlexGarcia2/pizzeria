function Pizza (size,topping,name) {
  debugger;
  this.size = size;
  this.top = top;
  this.name = name;
  this.total = 0
}
Pizza.prototype.addOrder= function(){
  var newOrder = new Pizza ();
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
  console.log("topping");
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
  console.log(total);
}
// function Order (size,topping,name)
// var order = new Pizza("large","pepperoni","alex")
// order.sizeCrust();
// order.topping();
// order.totalAmount();



// user interface ----------------

$(document).ready(function(){

  $("#form").submit(function(event){
    debugger;
    $("#crustSize","#topping").change();
    // $("#topping").change();
    event.preventDefault();

    var lar = $("#large").val();
    var pepp = $("#pepp").val();
    var nam = $("#name").val();
    var order = new Pizza(lar,pepp,nam);

  });


console.log(("#form"));
});

// $("#thankYou").on("click","div", function(){
  //need to show thank you your order has been placed
// })
