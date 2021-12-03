const Cave = require('../models/Cave.js')

async function getAll() {
    return Cave.find({}).lean()
}
async function create(data) {
    const result = new Cave(data)
    await result.save()
    return result
}
async function getOne(id) {
    return Cave.findById(id).lean()
}
module.exports = {
    getAll,
    getOne,
    create,
}