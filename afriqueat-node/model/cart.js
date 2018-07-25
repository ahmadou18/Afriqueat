const knex = require('./knex')

function cart() {
    return knex("cart")
}

function All() {
    // {userId: 3, isAdmin: true)
    return cart()
        .join('food', 'cart.id_food', '=', 'food.foodId')
        .select('food.*')
}


function getby(data) {
    // {userId: 3, isAdmin: true)
    return cart()
        .join('user', 'cart.id_user', '=', 'user.userId')
        .join('food', 'cart.id_food', '=', 'food.foodId')
        .select('user.*', 'food.*').where(data)
}


function add(data) {
    return cart().insert(data).returning('id_food')
}



function del(data) {
    return cart().delete(data)

}


module.exports = {
    All,
    getby,
    add,
    del
};