const express = require("express");
const router = express.Router();
const Cart = require("../models/cartModel");
const User = require("../models/userModel");


router.post("/create", async (req, res) => {
    try {
        const User = req.body.userId;
      const productId = req.body.products;
      console.log(User,productId,"Check")
        // const productId[quantity ]= req.body.quantity;
      const check = await Cart.findOne({ userId: User }).lean().exec();
      if (check) {
          console.log(check._id)
            const cart = await Cart.findByIdAndUpdate(check._id, {
                $push: { products: productId },
            });
        console.log("cart",cart)
            return res.status(201).send({ Cart: cart });
        } else {
            const cart = await Cart.create(req.body);
            return res.status(201).send({ Cart: cart });
        }
    // const cart = await Cart.create(req.body);
    // return res.status(201).send({ Cart: cart });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const cart = await Cart.find().lean().exec();
    return res.status(200).send({ Cart: cart });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
});
router.get("/:id", async (req, res) => {
  try {
    const cart = await Cart.findById(req.params.id).lean().exec();
    return res.status(200).send({ Cart: cart });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const cart = await Cart.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.status(203).send({ Cart: cart });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const cart = await Cart.findByIdAndDelete(req.params.id);
    return res.status(204).send({ Cart: cart });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
});
router.get("/:id/address", async (req, res) => {
  try {
    const address = await Cart.findById(req.params.id)
      .populate({ path: "addresses" })
      .lean()
      .exec();
    return res.status(200).send({ address: address });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
});

router.post(
  "/:id/address/create",

  async (req, res) => {
    // console.log("q")
    try {
      const errors = validationResult(req);
      //   console.log({ errors });
      if (!errors.isEmpty()) {
        return res.status(400).send({ errors: errors.array() });
      }
      const address = await Address.create(req.body);
      const cart = await Cart.findByIdAndUpdate(req.params.id, {
        $push: { addresses: address._id },
      });
      return res.status(200).send({ Address: address, Cart: cart });
    } catch (error) {
      return res.status(500).send({ error: error.message });
    }
  }
);
router.patch(
  "/address/edit/:idx",

  async (req, res) => {
    try {
      const errors = validationResult(req);
      //   console.log({ errors });
      if (!errors.isEmpty()) {
        return res.status(400).send({ errors: errors.array() });
      }
      const address = await Address.findByIdAndUpdate(req.params.idx, req.body);
      return res.status(200).send({ address: address });
    } catch (error) {
      return res.status(500).send({ error: error.message });
    }
  }
);
router.delete(":id/address/delete/:idx", async (req, res) => {
  try {
    const address = await Address.findByIdAndDelete(req.params.idx);
    const cart = await Cart.findByIdAndUpdate(req.params.id, {
      $pull: { addresses: req.params.idx },
    });
    return res.status(200).send({ address: address });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
});

module.exports = router;
