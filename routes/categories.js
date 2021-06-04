const { Router } = require('express');
const router = Router()
const { getCategories, postCategories, patchCategories, deleteCategories } = require('../controllers/categories');

router.get("/categories", getCategories)
router.post("/categories", postCategories)
router.patch("/categories/:id", patchCategories)
router.delete("/categories/:id", deleteCategories)

module.exports = router