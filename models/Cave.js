const { Schema, model } = require('mongoose')

const schema = new Schema({
    name: { type: String, required: [true, 'Name is required'], minLength: [3, 'Name must be at least 3 symbols long'] },
    location: { type: String, required: [true, 'Location is required'] },
    description: { type: String, required: [true, 'Description is required'] },
    imageUrl: { type: String, required: [true, 'Image is required'] },
    author: { type: Schema.Types.ObjectId, ref: 'User' },
    likes:[{ type: Schema.Types.ObjectId, ref: 'User', default: [] }],
})

module.exports = model('Cave', schema)