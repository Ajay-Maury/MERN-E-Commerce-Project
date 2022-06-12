const express = require("express");
const router = express.Router();
const Category = require("../models/categoriesModel");

router.post("/create", async (req, res) => {
  try {
    const category = await Category.create(req.body);
    return res.status(201).send({Category : category });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const category = await Category.find().lean().exec();
    return res.status(200).send({Category : category });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
});
router.get("/:id", async (req, res) => {
  try {
    const category = await Category.findById(req.params.id).lean().exec();
    return res.status(200).send({Category : category });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
});


router.patch("/edit/:id", async (req, res) => {
  try {
    const category = await Category.findByIdAndUpdate(req.params.id, req.body);
    return res.status(203).send({Category : category });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    const category = await Category.findByIdAndDelete(req.params.id);
    return res.status(204).send({Category : category });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
});
module.exports = router;
