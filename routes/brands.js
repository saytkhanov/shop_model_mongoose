const { Router } = require('express');
const controllers = require('../controllers/brands')
const router = Router();


router.post('/brands/add', controllers.postBrand)
router.delete('/brands/:id', controllers.deleteBrand)
router.patch('/brands/:id/patch', controllers.deleteBrand)

module.exports = router;