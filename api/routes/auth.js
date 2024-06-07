const authRouter = require("express").Router();
const login = require('../controllers/')

authRouter.get("/login", login)