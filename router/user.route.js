const express = require("express");
const router = express.Router();
const User = require("../model/user.model");

router.post("/register", async (req, res) => {
  const newUser = new User({
    nameUser: req.body.userName,
    email: req.body.email,
    password: req.body.password,
  });
  const user = await newUser. save();
  console.log(user);
  res.status(201).json(user);
  res.end();
});

module.exports = router;
