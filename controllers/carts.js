const Cart = require("../models/Cart");

const controllers = {
  addToCart: async (req, res) => {
    const { userId, productId, amount } = req.body;

    // достать документ где user = userId
    // проверить есть ли в ключе products документ с item = productId

    // если есть то + amount

    // если нет, то вставить новый документ


    const addToCart = await new Cart({
      user: userId,
      products: [
        {
          item: productId,
          amount: amount,
        },
      ],
    });
    res.json(addToCart);
  },
  deleteCart: async (req, res) => {
    const deleteCart = await Cart.findByIdAndDelete({ _id: req.params.id });
    res.json(deleteCart);
  },
};

module.exports = controllers;