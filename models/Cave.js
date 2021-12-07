const { Schema, model } = require('mongoose')

const schema = new Schema({
    name: { type: String },
    location: { type: String },
    description: { type: String },
    imageUrl: { type: String },
    owner:{type: Schema.Types.ObjectId, ref:'User'}
})

module.exports = model('Cave', schema)