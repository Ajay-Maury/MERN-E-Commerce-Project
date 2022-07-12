const express = require("express");
const router = express.Router();
const Cart = require("../models/cartModel");
const User = require("../models/userModel");


router.post("/create", async (req, res) => {
    try {
        const User = req.body.userId;
      const productId = req.body.products;
      // console.log(User,productId,"Check")
        // const productId[quantity ]= req.body.quantity;
      const check = await Cart.findOne({ userId: User }).lean().exec();
      if (check) {
          // console.log(check._id)
            const cart = await Cart.findByIdAndUpdate(check._id, {
                $push: { products: productId },
            });
        // console.log("cart",cart)
        
            return res.status(201).send({ Cart: cart });
      }
      else {
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
    const cart = await Cart.find().populate("products").lean().exec();
    // const cart = await Cart.find().lean().exec();
    let TotalPrice = 0
    let Products = cart[0].products
    let TotalProducts = Products.length;
    for (let i = 0; i < Products.length; i++) {
      TotalPrice += Products[i].price;
    }
    // console.log(Products,TotalPrice,TotalProducts);
    return res.status(200).send({ Cart: cart,TotalPrice,TotalProducts});
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
});
router.get("/:id", async (req, res) => {
  try {
    const cart = await Cart.findById(req.params.id).lean().exec();
    let TotalPrice = 0
    let Products = cart[0].products
    let TotalProducts = Products.length;
    for (let i = 0; i < Products.length; i++) {
      TotalPrice += Products[i].price;
    }
    // console.log(Products,TotalPrice,TotalProducts);
    return res.status(200).send({ Cart: cart,TotalPrice,TotalProducts });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const cart = await Cart.findByIdAndUpdate(req.params.id, req.body,);
    return res.status(203).send({ Cart: cart });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
});

router.delete("/:id/delete/:idx", async (req, res) => {
  try {
     const cart = await Cart.findByIdAndUpdate(req.params.id, {
       $pull: { products: req.params.idx },
     });
    // console.log("cart",cart)
    return res.status(204).send({ Cart: cart });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
});

module.exports = router