const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  user: {
    type: mongoose.Types.ObjectId,
    ref: 'user'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  products: [{
    item: {
      type:  mongoose.Types.ObjectId,
      ref: 'product'
  },
  amount: {
    type: Number,
    default: 1
}
  }]
})

module.exports = mongoose.model('cart', cartSchema)