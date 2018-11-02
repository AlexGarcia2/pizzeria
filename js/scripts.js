function Pizza (size,topp,name) {
  // debugger;
  console.log("pizza")
  this.size = size;
  this.topp = topp;
  this.name = name;
  this.total = [];
}
// Pizza.prototype.addOrder= function(){
//   var newOrder = new Pizza ();
// }

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

Pizza.prototype.topping = function() {
  // debugger;
  console.log("topping");
  if (this.topp === "pepperoni"){
    return 3.00;
  }else if (this.topp === "bellpepper") {
    return 2.00;
  }else if (this.topp === "mushrooms") {
    return 2.00;
  }else if (this.topp === "ham") {
    return 3.00;
  }else if (this.topp === "sausage"){
    return 3.00;
  }

}

Pizza.prototype.totalAmount = function() {
  var topping = this.topping();
  var crust = this.sizeCrust();
  total = (topping + crust);
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
    var pepp = $("#top").val();
    var nam = $("#name").val();
    var order = new Pizza(lar,pepp,nam);
    order.totalAmount()
    var results = order.total;
    $("#result").val(results);

  });

});
// order.sizeCrust();
// order.topping();
// order.totalAmount();
