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
router.get("/:id/address", async (req, res) => {
  try {
    const address = await User.findById(req.params.id)
      .populate({ path: "addresses" })
      .lean()
      .exec();
    return res.status(200).send({ address: address });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
});

router.post("/:id/address/create", async (req, res) => {
  // console.log("q")
  try {
    const address = await Address.create(req.body);
    const user = await User.findByIdAndUpdate(
      req.params.id,
      {
        $push: { addresses: address._id },
      }
    );
    return res.status(200).send({ Address: address, user: user });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
});
router.patch("/address/edit/:idx", async (req, res) => {
  try {
    const address = await Address.findByIdAndUpdate(
      req.params.idx,
      req.body
    );
    return res.status(200).send({ address: address });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
});
router.delete(":id/address/delete/:idx", async (req, res) => {
  try {
    const address = await Address.findByIdAndDelete(
      req.params.idx
    );
    const user = await User.findByIdAndUpdate(req.params.id, {
      $pull: { addresses: req.params.idx },
    });
    return res.status(200).send({ address: address });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
});

module.exports = router;
