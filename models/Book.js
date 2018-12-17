const mongoose = require('mongoose');
const Schema = mongosse.schema;

// create schema 

const bookSchema = new Schema = ({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    subject: {
        type: Date,
        default: Date.now
    },
    operation: {
        type: String,
        required: true
    },
    rate: {
        type: Number,
        default: 0
    },
    date: {
        type: Date,
        default: Date.now
    },

})

module.exports = User = mongoose.model(users , bookSchema);