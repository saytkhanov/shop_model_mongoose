const { Router } = require('express');
const router = Router();
const { addToCart, deleteCart } = require('../controllers/carts')

router.post('/cart', addToCart)
router.delete('/cart/:id/products', deleteCart);

module.exports = router