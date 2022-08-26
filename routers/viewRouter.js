const express = require("express");
const viewController = require("../controllers/viewController");
const router = express.Router();

router.get("/", viewController.index);
router.get("/blog", viewController.blog);
router.get("/services", viewController.services);
router.get("/contact", viewController.contact);

module.exports = router;
