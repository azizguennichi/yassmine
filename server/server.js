const express = require("express");
require("dotenv").config();
const userRoute = require("./router/user");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

mongoose.connect(process.env.MONGO_URL);

const port = process.env.PORT || 8800;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.listen(port, () => console.log("server is ready"));

// routers

app.use("/auth", userRoute);
