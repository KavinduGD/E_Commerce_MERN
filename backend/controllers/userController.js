const { generateToken } = require("../config/jwtToken");
const User = require("../models/userModels");
const asyncHandler = require("express-async-handler");

const createUser = asyncHandler(async (req, res) => {
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
    res.status(400);
    throw new Error("User already exists");
  }
});

const loginUserCtrl = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  //check if user exists or not

  const findUser = await User.findOne({ email });

  console.log(findUser);

  if (findUser && (await findUser.isPasswordMatch(password))) {
    const { _id, firstName, lastName, email, mobile, role } = findUser;
    console.log(findUser.id);
    console.log(findUser._id);
    res.json({
      _id,
      firstName,
      lastName,
      email,
      mobile,
      role,
      token: generateToken(findUser?.id),
    });
  } else {
    throw new Error("Invalid Credentials");
  }
});

const getAllUsers = asyncHandler(async (req, res) => {
  try {
    const allUsers = await User.find();
    res.json(allUsers);
  } catch (error) {
    throw new Error(error);
  }
});
module.exports = { createUser, loginUserCtrl, getAllUsers };
