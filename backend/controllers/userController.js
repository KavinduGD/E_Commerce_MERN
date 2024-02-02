const User = require("../models/userModels");

const createUser = async (req, res) => {
  const { firstName, lastName, email, mobile, password } = req.body;

  const findUser = await User.findOne({ email });

  if (!findUser) {
    const newUser = await User.create({
      firstName,
      lastName,
      email,
      mobile,
      password,
    });
    res.status(201).json({ message: "User Created", success: true });
  } else {
    res.status(400).json({ message: "User already exists", success: false });
  }
};

module.exports = { createUser };
