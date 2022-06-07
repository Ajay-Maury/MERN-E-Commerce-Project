const express = require("express");
const router = express.Router();
const User = require("../models/userModel")

router.get("/", async (req, res) => {
  try {
    const user = await User.find().lean().exec()
    res.status(200).send(user)
  } catch (error) {
    return res.status(500).send("Error : ", error);
  }
});

router.post("/create", async (req, res) => {
  try {
    const user = await User.create(req.body)
    return res.status(201).send(user)
  } catch (error) {
    return res.status(500).send("Error : ", error);
  }
});

router.get("/:id", async (req, res) => {
  console.log(1)
  try {
     const user = await User.findById(req.params.id)
     return  res.status(200).send(user);
  } catch (error) {
    return res.status(500).send("Error : ", error.message);
  }
});

router.patch("/:id/edit", async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id,req.body);
    res.status(200).send(user);
  } catch (error) {
    return res.status(500).send("Error : ", error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    res.status(204).send(user);
  } catch (error) {
    return res.status(500).send("Error : ", error);
  }
});

router.get("/:id/addresses", async (req, res) => {
  try {
  } catch (error) {
    return res.status(500).send("Error : ", error);
  }
});

router.post("/:id/addresses/create", async (req, res) => {
  try {
  } catch (error) {
    return res.status(500).send("Error : ", error);
  }
});

router.patch("/:id/addresses/:idx/edit", async (req, res) => {
  try {
  } catch (error) {
    return res.status(500).send("Error : ", error);
  }
});

module.exports = router;
