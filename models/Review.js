const Reviews = require('../models/Reviewe')

const controllers = {
  getPostReviews: async (req, res) => {
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
  deleteReviews: async (req, res) => {
    const reviewDelete = await Reviews.findByIdAndDelete({
      _id: req.params.id
    });
    res.json(reviewDelete)
  }
};
module.exports = controllers;