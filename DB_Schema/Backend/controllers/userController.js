const express = require("express");
const router = express.Router();
const User = require("../models/userModel");
const Address = require("../models/addressModel");

router.post("/create", async (req, res) => {
  try {
    const user = await User.create(req.body);
    return res.status(201).send({ User: user });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const user = await User.find().lean().exec();
    return res.status(200).send({ User: user });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
});
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id).lean().exec();
    return res.status(200).send({ User: user });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
});


router.patch("/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body,{new :true});
    return res.status(203).send({ User: user });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    return res.status(204).send({ User: user });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
});
router.get("/:id/address/idx", async (req, res) => {
  try {
    const address = await Address.find(req.params.id).lean().exec();
    return res.status(200).send({ address: address });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
});

router.post("/:id/address", async (req, res) => {
  try {
    const address = await Address.create(req.body);
    const user = await User.findByIdAndUpdate(req.params.id,{new:true}, {
      $push: { address: address._id }
    });
    return res.status(200).send({ Address: address, user: user });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
});
router.patch("/address/:idx", async (req, res) => {
  try {
    const address = await Address.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    return res.status(200).send({ address: address });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
});

module.exports = router;
