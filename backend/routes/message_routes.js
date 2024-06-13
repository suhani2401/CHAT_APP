const express = require("express");
const { Router } = require("express");
const messageController = require("../controllers/message_controller");
const protectRoute = require("../middleware/protectRoute");

const router = Router();

router.get("/:id", protectRoute, messageController.sendMessage_get);
router.post("/send/:id", protectRoute, messageController.sendMessage_post);

module.exports = router;
