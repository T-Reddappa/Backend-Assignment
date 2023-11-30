const express = require("express");
const User = require("../models/User");
const { generateToken } = require("../utils/auth");

const register = async (req, res) => {
  console.log("a request is registered");
  try {
    const { username, email, password } = req.body;
    const existingUser = await User.findOne({ email });

    //checking if the user already exists
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "User with this email already exists." });
    }

    //creating a new user
    const newUser = new User({
      username,
      email,
      password,
    });

    //saving the user in the database
    await newUser.save();

    const token = generateToken(newUser);

    res.status(201).json({
      message: "User registered successfully",
      createdUser: newUser,
      token,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const login = async (req, res) => {
  console.log("login requesteadsfadsfd");
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(401)
        .json({ message: "Authentication failed. User not found." });
    } else if (user.password === password) {
      const token = generateToken(user);
      return res
        .status(200)
        .json({ message: "Login Successful", token, user: user });
    } else if (user.password !== password) {
      return res
        .status(401)
        .json({ message: "Authentication failed. Wrong password." });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { register, login };
