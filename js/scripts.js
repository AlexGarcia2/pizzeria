function Pizza (size,topp,name) {
  debugger;
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
  debugger;
  var sizes = ["large","medium","small"];
  var crust = this.size;
    if(crust === sizes[0]){
    return 15.00
  }else {
    return false
  }

}

Pizza.prototype.topping = function() {
  debugger;
  console.log("topping");
  if (this.topp === "pepperoni"){
  return 3.00;
  }
}

Pizza.prototype.totalAmount = function() {
  var topping = this.topping();
  var crust = this.sizeCrust();
  total = (topping + crust);
  this.total = total;
  console.log(total);
}




// user interface ----------------

$(document).ready(function(){

  $("#form").submit(function(event){
    debugger;
    $("#crustSize","#topping").change();
    event.preventDefault();

    var lar = $("#crust").val();
    var pepp = $("#top").val();
    var nam = $("#name").val();
    var order = new Pizza(lar,pepp,nam);
    order.totalAmount($("#result").val());


  });

//     $("#total").on("submit","output", function(){
//       debugger;
// console.log("order")
    //   var results = order.total;
    //   $("#results").input(results);
    // });



});
// order.sizeCrust();
// order.topping();
// order.totalAmount();
