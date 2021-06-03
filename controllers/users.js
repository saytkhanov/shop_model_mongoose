const User = require("../models/User");

class userController {
  async create(req, res) {
    try {
      const { userName, email, login, password } = req.body;
      const user = await new User({
        userName,
        email,
        login,
        password,
      });
      await user.save();
      res.json(user);
    } catch (e) {
      res.json(e.message);
    }
  }
}

module.exports = User;
