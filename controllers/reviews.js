const Reviews = require('../models/Review')

const controllers = {
  getProductReviews: async (req, res) => {
    const reviews = await Reviews.find({
      product: req.params.id
    });
    res.json(reviews)
  },
  postReview: async (req, res) => {
    const review = new Reviews({
      title: req.body.title,
      user: req.body.user,
      product: req.body.product
    });
    await review.save();
    res.json(review)
  },
  deleteReview: async (req, res) => {
    const reviewDelete = await Reviews.findByIdAndDelete({
      _id: req.params.id
    });
    res.json(reviewDelete)
  }
};
module.exports = controllers;


