const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcryptjs');


const UserRepository = require("../repositories/UserRepository");

const router = express.Router();


// POST - login user
router.post("/", async (req, res) => {

  const data = await UserRepository.create(req.body);
  const { username, password } = req.body;

  try {
    let user = await UserRepository.getOneByColumn(username, "username");
    if (!user) {
      return res
        .status(400)
        .json({ errors: [{ msg: "Invalid credentials." }] });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(400)
        .json({ errors: [{ msg: "Invalid credentials." }] });
    }

    const payload = {
      user: {
        id: user.id,
      },
    };
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: 18000 },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});


module.exports = router;