const express = require("express");
const router = express.Router();
const Address = require("../models/addressModel");
const User = require("../models/userModel");

router.post("/:id/address", async (req, res) => {
  // console.log("Adderes")
  try {
    const address = await Address.create(req.body);
    const user = await User.findByIdAndUpdate(req.params.id, {
      $push: { addresses: address._id },
    });
    return res.status(200).send({ Address: address, user: user });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const address = await Address.find(req.params.id).lean().exec();
    return res.status(200).send({ address: address });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
});


router.patch("/:id", async (req, res) => {
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
router.delete("/:id", async (req, res) => {
  try {
    const address = await Address.findByIdAndDelete(req.params.id);
    return res.status(200).send({ address: address });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
});

module.exports = router;
