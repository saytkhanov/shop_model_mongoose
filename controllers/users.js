const mongoose = require("mongoose");

const User = mongoose.Schema({
  userName: { type: String, requierd: true },
  email: { type: String, require: true },
  login: { type: String, required: true },
  password: { type: String, required: true },
});

module.exports = User;
