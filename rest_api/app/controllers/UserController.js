const express = require("express");

const UserRepository = require("../repositories/UserRepository");
// const addMetaData = require("../utils/addMetaData");

const router = express.Router();

// GET list all user
router.get("/", async (req, res) => {
  const data = await UserRepository.getAll(req.query);
  res.status(200).json(data);
});

// GET a specific item
router.get("/:id", async (req, res) => {
  const data = await UserRepository.getById(req.params.id);
 

  if (data) {
    res.status(200).json(
      data
    );
  } else {
    res.status(404).json({
      error: "incorrect id",
    });
  }
});

// POST - create a new user
router.post("/", async (req, res) => {

  const data = await UserRepository.create(req.body);

  if (data) {
    res.status(201).json(data);
  } else {
    res.status(401).json({
      error: "bad request",
    });
  }
});

// PUT - update a specific user
router.put("/:id", async (req, res) => {
  const data = await UserRepository.update(req.params.id, req.body);
  if (data) {
    res.status(200).json(data);
  } else {
    res.status(401).json({
      error: "bad request",
    });
  }
});

// DELETE - delete a specific user
router.delete("/:id", async (req, res) => {
  await UserRepository.delete(req.params.id);
  res.sendStatus(204);
});


module.exports = router;