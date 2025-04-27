const orders= [
  {pizzas : 12},
  {pizzas : 14},
  {pizzas : 20},
];
 function numberOfpizzas(orders){
  let total = 0;
  for(let i = 0; i < orders.length; i++){
    total += orders[i].pizzas;
  }
  return total;
 }
 module.exports = numberOfpizzas;
 console.log(numberOfpizzas(orders)); 
// Output: 46
