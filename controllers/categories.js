const Category = require('../models/Category');

const controllers = {
  getCategories: async (req, res) => {
    const categories = await Category.find()
    res.json(categories)
  },
  postCategories: async (req, res) => {
    const addCategories = await new Category({
      name: req.body.name
    })
    await addCategories.save()
    res.json(addCategories)
  },
  patchCategories: async (req, res) => {
    const id = req.params.id;
    const name = req.body;
    const options = {new: true}
    const patchCategories = await Category.findByIdAndUpdate(id, name, options)
    res.json(patchCategories)
  },
  deleteCategories: async (req, res) => {
    const destroyCategory = await Category.findByIdAndDelete({id: req.params.id})
    res.json(destroyCategory)
  }
}

module.exports = controllers