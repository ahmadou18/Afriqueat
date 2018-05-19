const knex = require('./knex')

function food(){
    return knex("food")
}

function All() {
    return food()
}


function getby(data) {
    // {userId: 3, isAdmin: true)
    return food().first().where(data)
}

function add(data) {
    return food().insert(data).returning('foodId')
}

function updateData(data) {
    return food().update(data)

}

function del(data) {
    return food().delete(data)

}


module.exports = {
    All,
    getby,
    add,
    updateData,
    del
};