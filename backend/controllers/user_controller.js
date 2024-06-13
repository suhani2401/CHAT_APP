const express = require("express");
const User = require("../models/user");

module.exports.getUsersForSidebar_get = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;

    const filteredUser = await User.find({
      _id: { $ne: loggedInUserId },
    }).select("-password");

    return res.status(200).json(filteredUser);
  } catch (error) {
    console.log("Error in getUsersForSidebar controller", error.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
