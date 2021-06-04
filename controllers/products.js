const Product = require("../models/Product");

class productController {
  async create(req, res) {
    try {
      const { nameProduct, brand, category, price, size, color } = req.body;
      const product = await new Product({
        nameProduct,
        brand,
        category,
        price,
        size,
        color,
      });
      await product.save();
      res.json(product);
    } catch (e) {
      res.json(e.message);
    }
  }
  async get(req, res) {
    try {
      const product = await Product.find().lean();
      res.json(product);
    } catch (e) {
      res.json(e.message);
    }
  }
  async getByCategory(req, res) {
    try {
      const product = await Product.find({ category: req.params.id }).lean();

      res.json(product);
    } catch (e) {
      res.json(e.message);
    }
  }
  async getByBrand(req, res) {
    try {
      const product = await Product.find({ brand: req.params.id }).lean();

      res.json(product);
    } catch (e) {
      res.json(e.message);
    }
  }
  async update(req, res) {
    try {
      const id = req.params.id;
      const { nameProduct, brand, category, price, size, color } = req.body;
      const product = await Product.findByIdAndUpdate(
        id,
        { nameProduct, brand, category, price, size, color },
        { new: true }
      );

      res.json(product);
    } catch (e) {
      res.json(e.message);
    }
  }
  async delete(req, res) {
    try {
      const product = await Product.findByIdAndDelete({
        _id: req.params.id,
      }).lean();
      res.json(product);
    } catch (e) {
      res.json(e.message);
    }
  }
}

module.exports = new productController();
