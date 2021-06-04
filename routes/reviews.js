const { Router } = require('express');
const controllers = require('../controllers/reviews')
const router = Router();

router.get('/products/:id/reviews', controllers.getProductReviews)
router.post('/review', controllers.postReview)
router.delete('/delete/review/:id', controllers.deleteReview)

module.exports = router;