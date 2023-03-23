const UserModel = require("../models/User");
const jwt = require("jsonwebtoken");
const { hashpassword, comparePassword } = require("../helpers/authHelper");

// register

exports.register = async (req, res) => {
  try {
    const { name, email, password, location, answer, phone } = req.body;
    // validation
    if (!name) {
      return res.send({ error: "Name is Required" });
    }
    if (!email) {
      return res.send({ error: "email is Required" });
    }
    if (!password) {
      return res.send({ error: "password is Required" });
    }
    if (!location) {
      return res.send({ error: "location is Required" });
    }
    if (!answer) {
      return res.send({ error: "answer is Required" });
    }
    if (!phone) {
      return res.send({ error: "phone is Required" });
    }
    // check user
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      res.status(200).send({
        success: false,
        message: "Already Register please login",
      });
    }
    const hashedPassword = await hashpassword(password);

    const user = await new UserModel({
      name,
      email,
      password: hashedPassword,
      location,
      answer,
      phone,
    }).save();
    res.status(201).send({
      success: true,
      message: "User Register Success",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in register Function",
      error,
    });
  }
};

// Login

exports.Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    // validation
    if (!email || !password) {
      return res.status(404).send({
        success: false,
        message: "Invalid email or password",
      });
    }
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "Invalid email",
      });
    }
    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.status(404).send({
        success: false,
        message: "Invalid password",
      });
    }
    // token
    const token = await jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    res.send({
      success: true,
      message: "Login successfuly",
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        location: user.location,
        phone: user.phone,
        role: user.role,
      },
      token,
    });
  } catch (error) {
    // console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in register Function",
      error,
    });
  }
};
