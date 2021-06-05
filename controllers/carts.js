const Cart = require("../models/Cart");

const controllers = {
  addToCart: async (req, res) => {
    const { user, product, amount } = req.body;

    // достать документ где user = userId
    //читаем модель Cart где user равен userId
    let cart = await Cart.findOne({ user })
    //если данный документ
    if(cart) {
      //проверяем с помощью findindex есть ли в документе item равный id продукту
      let cartIndex = cart.products.findIndex(item => {
        return item.item.toString() === product
      })


     //если данный индекс не равен -1
      if(cartIndex !== -1) {
        //то   в нашем документе где юзер, c необходимым индексом, обращаемся к ключу amount и прибавляем значение
        cart.products[cartIndex].amount += amount
        //либо так
        // if(cartIndex > -1) {
        //   let productItem = cart.products[cartIndex]
        //   productItem.amount = amount
        //   cart.products[cartIndex] = productItem
      } else {
        //в данный документ с продуктами добавляем еще 1 элемент с количество
      cart.products.push( { item: product, amount: amount, })
      }
      //все дело сохраняем
      await cart.save()
      res.json(cart)
    } else {
      //если нет продукта в корзине создаем новый
      const addToCart = await new Cart({
        user,
        products: [
          {
            item: product,
            amount: amount,
          },
        ],
      });
      await addToCart.save()
      res.json(addToCart);
    }
    // проверить есть ли в ключе products документ с item = productId

    // если есть то + amount

    // если нет, то вставить новый документ

  },
  deleteCart: async (req, res) => {
    const deleteCart = await Cart.findByIdAndDelete({ _id: req.params.id });
    res.json(deleteCart);
  },
};

module.exports = controllers;