const mongoose = require("mongoose");

const User = new mongoose.Schema({
  userName: { type: String, requierd: true },
  email: { type: String, require: true },
  login: { type: String, required: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("user", User);
