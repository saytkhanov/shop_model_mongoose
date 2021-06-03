const mongoose = require("mongoose");

const reviewsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "product"
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("review", reviewsSchema);