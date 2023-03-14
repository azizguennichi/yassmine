const express = require("express");
require("dotenv").config();
const userRoute = require("./router/user");
const mongoose = require("mongoose");

const app = express();

mongoose.connect(process.env.MONGO_URL);

const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => console.log("server is ready"));

// routers

app.use("/", userRoute);

// get : besh tjibelna page
// post: besh nposti data w nhotha fel database
// put & patch : update lhaja mawjouda fel base de donnee
// delete: besh tfasekhlek haja mel bd
// use : besh testaamel beha el route

// app.get("/", (req, res) => {
//   res.send("<h1>welcome from home</h1>");
// });

// app.get("/about", (req, res) => {
//   res.send("<h1>welcome from about</h1>");
// });

// create package json:
// npm init

// 1- npm i express, npm i dotenv, npm i nodemon, npm i mongoose
