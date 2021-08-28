const express = require("express");

const PostRepository = require("../repositories/PostRepository");
// const addMetaData = require("../utils/addMetaData");

const router = express.Router();

// GET list all user
router.get("/", async (req, res) => {
  const data = await PostRepository.getAll(req.query);
  res.status(200).json(data);
});

// GET a specific item
router.get("/:id", async (req, res) => {
  const data = await PostRepository.getById(req.params.id);
 

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

// POST - create a new post
router.post("/", async (req, res) => {

  const data = await PostRepository.create(req.body);

  if (data) {
    res.status(201).json(data);
  } else {
    res.status(401).json({
      error: "bad request",
    });
  }
});

// PUT - update a specific post
router.put("/:id", async (req, res) => {
  const data = await PostRepository.update(req.params.id, req.body);
  if (data) {
    res.status(200).json(data);
  } else {
    res.status(401).json({
      error: "bad request",
    });
  }
});

// DELETE - delete a specific post
router.delete("/:id", async (req, res) => {
  await PostRepository.delete(req.params.id);
  res.sendStatus(204);
});


module.exports = router;