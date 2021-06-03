const { Router } = require("express");
const productController = require("../controllers/products");

const router = Router();

router.get("/products", productController.get);
router.get("/products/:id/categories", productController.getById);
router.post("products/:id", productController.create);
router.patch("products/:id", productController.update);
router.delete("products/:id", productController.delete);

module.exports = router;
