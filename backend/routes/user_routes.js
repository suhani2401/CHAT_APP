const express = require("express");
const { Router } = require("express");
const userController = require("../controllers/user_controller");
const protectRoute = require("../middleware/protectRoute");

const router = Router();

router.get("/", protectRoute, userController.getUsersForSidebar_get);

module.exports = router;
