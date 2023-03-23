const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    location: { type: String, required: true },
    answer: { type: String, required: true },
    phone: { type: Number, required: true },
    role: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const UserModel = mongoose.model("user", userSchema);
module.exports = UserModel;
