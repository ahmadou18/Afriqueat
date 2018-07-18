const knex = require('./knex')

function cart() {
    return knex("cart")
}




function getby(data) {
    // {userId: 3, isAdmin: true)
    return cart()
        .join('user', 'cart.id_user', '=', 'user.userId')
        .join('food', 'cart.id_food', '=', 'food.foodId')
        .select('user.*', 'food.*').where(data)
}

function add(data) {
    return cart().insert(data).returning('foodId')
}



function del(data) {
    return cart().delete(data)

}


module.exports = {
    getby,
    add,
    del
};