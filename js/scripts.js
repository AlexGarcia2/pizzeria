function Pizza (size,meatTopp,veggieTopp,name) {
  // debugger;
  console.log("pizza")
  this.size = size;
  this.meatTopp = meatTopp;
  this.veggieTopp = veggieTopp;
  this.name = name;
  this.total = [];
}
Pizza.prototype.sizeCrust = function() {
  // debugger;
  var sizes = ["large","medium","small"];
  var crust = this.size;
  if(crust === sizes[0]){
    return 15.00;
  }else if(crust === sizes[1]){
    return 12.00;
  }else if (crust === sizes[2]) {
    return 10.00;
  }
  return false;
}
Pizza.prototype.veggieTopping = function() {
  // debugger;
  console.log("topping");
  if (this.veggieTopp === "bellpepper" || this.veggieTopp === "mushrooms" || this.veggieTopp === "onions"){
    return 2.00
  }

}

Pizza.prototype.meatTopping = function() {
  // debugger;
  console.log("topping");
  if (this.meatTopp === "ham" || this.meatTopp === "pepperoni" || this.meatTopp === "sausage"){
    return 3.00;
  }
}

Pizza.prototype.totalAmount = function() {
  var meat = this.meatTopping();
  var veggie = this.veggieTopping();
  var crust = this.sizeCrust();
  total = (meat + crust + veggie);
  this.total.push(total);

  console.log(total);
}




// user interface ----------------

$(document).ready(function(){

  $("#form").submit(function(event){
    // debugger;
    $("#crustSize","#topping").change();
    event.preventDefault();

    var lar = $("#crust").val();
    var pepp = $("#meat").val();
    var vegg = $("#vegg").val();
    var nam = $("#name").val();
    var order = new Pizza(lar,pepp,vegg,nam);
    order.totalAmount()
    var results = order.total;
    $("#total").show();
    $("#result").val("total is: " + results +".00" + " dollars.");

  });

});
// order.sizeCrust();
// order.topping();
// order.totalAmount();
