const {Schema,model} = require('mongoose')

const schema = new Schema({
name:{type:String},
location:{type:String},
description:{type:String},
imageUrl:{type:String}
})

module.exports = model('Cave',schema)