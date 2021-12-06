const { Schema, model } = require('mongoose')

const schema = new Schema({
    email: { type: String },
    hashedPassword: { type: String }
})

module.exports = model('User', schema)