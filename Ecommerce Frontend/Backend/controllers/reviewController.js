const express = require("express");
const router = express.Router();
const Review = require("../models/reviewsModel");
router.get("/", async (req, res) => {
  try {
    const review = await Review.find().lean().exec();
    return res.status(200).send({ review });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
});
router.get("/:id", async (req, res) => {
  try {
    const review = await Review.findById(req.params.id).lean().exec();
    return res.status(200).send({ review });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
});
router.post("/", async (req, res) => {
  try {
    const review = await Review.create(req.body);
    return res.status(201).send({ review });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const review = await Review.findByIdAndUpdate(req.params.id, req.body);
    return res.status(203).send({ review });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const review = await Review.findByIdAndDelete(req.params.id);
    return res.status(204).send({ review });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
});
module.exports = router;
