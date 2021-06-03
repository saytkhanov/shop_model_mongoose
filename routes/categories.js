const { Router } = require('express');
const router = Router();
const { getCategories, postCategories, patchCategories, deleteCategories } = require('../controllers/categories');

router.use("/categories", getCategories)
router.use("/categories", postCategories)
router.use("/categories/:id", patchCategories)
router.use("/categories/:id", deleteCategories)

module.exports = router;