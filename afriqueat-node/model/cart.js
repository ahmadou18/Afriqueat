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
        .select('users.*', 'food.*')
        .join('users', 'cart.id_user', '=', 'users.userId')
        .join('food', 'cart.id_food', '=', 'food.foodId')
        .where(data)
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