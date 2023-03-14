const UserModel = require("../models/User");

exports.postUser = async (req, res) => {
  const { name, email, age } = req.body;
  try {
    let user = await new UserModel({
      name,
      email,
      age,
    }).save();
    res.send(user);
  } catch (error) {
    console.log(error);
  }
};
