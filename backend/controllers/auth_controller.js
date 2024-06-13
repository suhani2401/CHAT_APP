const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/user");

const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: maxAge,
  });
};

// Signup
module.exports.signup_get = (req, res) => {
  // res.render("signup");
  res.send("SignupUser");
};
module.exports.signup_post = async (req, res) => {
  try {
    let { fullName, username, password, confirmpassword, gender } = req.body;

    if (!username) {
      return res.status(400).json({ error: "Username is required" });
    }
    if (password !== confirmpassword) {
      return res.status(400).json({ error: "Password Don't Match" });
    }

    password = await bcrypt.hash(password, 10); // bcrypt password

    const user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({ error: "User Already Exists" });
    }

    // https://avatar-placeholder.iran.liara.run/
    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    const newUser = await User.create({
      fullName,
      username,
      password,
      gender,
      profilepic: gender === "male" ? boyProfilePic : girlProfilePic,
    });

    if (newUser) {
      // Generate JWT token here
      const token = createToken(newUser._id);
      res.cookie("jwt", token, {
        httpOnly: true,
        sameSite: "strict",
        maxAge: maxAge * 1000,
        secure: process.env.NODE_ENV !== "development",
      });
      console.log("JWT Token: ", token);

      await newUser.save();

      return res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        username: newUser.username,
        profilepic: newUser.profilepic,
      });
    }
  } catch (error) {
    console.log("Error in signup controller", error.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

// Login
module.exports.login_get = (req, res) => {
  // res.render("login");
  res.send("LoginUser");
};
module.exports.login_post = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username: username });
    if (user) {
      const checkPassword = await bcrypt.compare(password, user.password);
      if (checkPassword) {
        console.log("auth", user);
        // Generate JWT token here
        const token = createToken(user._id);
        res.cookie("jwt", token, {
          httpOnly: true,
          sameSite: "strict",
          maxAge: maxAge * 1000,
          secure: process.env.NODE_ENV !== "development",
        });

        console.log("JWT Token: ", token);
        return res.status(201).json({
          _id: user._id,
          fullName: user.fullName,
          username: user.username,
          profilepic: user.profilepic,
        });
      }
      throw Error("incorrect password");
    }
    throw Error("incorrect username");
  } catch (error) {
    console.log("Error in login controller", error.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

//Logout
module.exports.logout_get = async (req, res) => {
  res.send("LogoutUser");
};
module.exports.logout_post = async (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    return res.status(200).json({ message: "Logout successful" });
  } catch (error) {
    console.log("Error in logout controller", error.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
