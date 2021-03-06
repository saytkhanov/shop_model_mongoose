const { Router } = require('express');
const router = Router();

router.use(require("./categories"));
router.use(require("./users"));
router.use(require("./products"));
router.use(require("./brands"));
router.use(require("./reviews"));
router.use(require("./carts"));

module.exports = router