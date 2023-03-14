const { postUser } = require("../controller/user");

const route = require("express").Router();

route.post("/register", postUser);

module.exports = route;
