const mongoose = require('mongoose')

const Product = mongoose.Schema({
    nameProduct: {type: String, required: true},
    brand: {type: mongoose.Types.ObjectId, required: true},
    category: {type: mongoose.Types.ObjectId , required: true, ref: 'category'},
    price: {type: String, required: true},
    size: {type: String, required: true},
    color: {type: String, required: true},
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
})

module.exports = Product
