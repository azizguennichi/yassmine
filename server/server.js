const express = require("express");
require("dotenv").config();
const userRoute = require("./router/user");
const mongoose = require("mongoose");
const cors = require("cors");
const userInfoRoute = require("./router/userInfo");
const multer = require("multer");
const path = require("path");
const { fileURLToPath } = require("url");
const app = express();

mongoose.connect(process.env.MONGO_URL);

const port = process.env.PORT || 8800;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// upload image
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});
const upload = multer({ storage: storage });

app.post("/api/upload", upload.single("file"), (req, res) => {
  try {
    return res.status(200).json("Image uploaded successfully!");
  } catch (error) {
    res.status(500).json("Error. Image not uploaded!");
  }
});

app.listen(port, () => console.log("server is ready"));

// routers

app.use("/auth", userRoute);
app.use("/user", userInfoRoute);
