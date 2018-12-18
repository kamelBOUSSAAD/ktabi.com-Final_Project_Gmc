const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create schema 

const BookSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
      },
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    operation: {
        type: String,
        required: true
    },
    categorie: {
        type: String,
        required: true
      },
    rate: {
        type: String,
        default: 0
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Book = mongoose.model('books', BookSchema);