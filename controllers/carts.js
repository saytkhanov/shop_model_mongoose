const Cart = require('../models/Cart');

const controllers = {
  addToCart: async (req, res ) => {
    const addToCart = await new Cart({
      user: req.body.id,
      product: [{
        item: req.body.id,
        amount: req.body.amount
      }]
    })
    res.json(addToCart)
  },
  deleteCart: async (req, res) => {
    const deleteCart = await Cart.find({item: req.body.id})
    res.json(deleteCart)
  }
}

module.exports = controllers