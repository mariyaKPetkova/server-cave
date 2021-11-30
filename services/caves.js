const Cave = require('../models/Cave.js')
async function getAll(){
    return Cave.find({}).lean()
}
async function getOne(id){
    return Cave.findById(id).lean()
}
module.exports = {
getAll,
getOne
}