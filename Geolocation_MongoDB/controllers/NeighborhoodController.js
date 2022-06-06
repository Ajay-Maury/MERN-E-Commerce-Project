const express = require("express");
const Neighborhood = require("../models/NeighborhoodModel");
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const neighborhood = await Neighborhood.findOne().lean().exec();
    return res.status(200).send({ Neighborhoods: neighborhood });
  } catch (error) {
    return res.status(500).send(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const neighborhood = await Neighborhood.create(req.body);
    return res.status(201).send({ Neighborhoods: neighborhood });
  } catch (error) {
    return res.status(500).send(error);
  }
});

module.exports = router;
