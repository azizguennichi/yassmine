const { register, Login } = require("../controller/user");

const route = require("express").Router();

/* auth */
route.post("/register", register);
route.post("/login", Login);

module.exports = route;
