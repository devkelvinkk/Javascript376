const ORDER_TYPES = require('./orderTypes');

function numberOfPizzas(orders) {
    let total = 0;
    for (let i = 0; i < orders.length; i++) {
        if (orders[i].type === ORDER_TYPES.PIZZA) {
            total += orders[i].pizzas;
        }
    }
    return total;
}

module.exports = numberOfPizzas;
