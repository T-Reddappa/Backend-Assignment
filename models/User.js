const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  firstName: String,
  lastName: String,
  bio: String,
  phoneNumber: String,
  profilePictureUrl: String,
});

const User = mongoose.model("User", userSchema);
module.exports = User;
