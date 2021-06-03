const { Router } = require("express");
const userController = require("../controllers/users");

const router = Router();

router.post("/user", userController.create);

module.exports = router;
