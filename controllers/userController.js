const User = require("../models/User");

const getUserProfile = async (req, res) => {
  console.log("Get profile requrested");
  console.log("id", req.params.userId);
  try {
    const user = await User.findById(req.params.userId);
    console.log(user);
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateUserProfile = async (req, res) => {
  try {
    const updatedProfileData = req.body;
    const userId = req.params.userId;
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      updatedProfileData,
      {
        new: true,
      }
    );
    if (updatedUser) {
      res
        .status(200)
        .json({ message: "User Updated Successfully.", updatedUser });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getUserProfile, updateUserProfile };
