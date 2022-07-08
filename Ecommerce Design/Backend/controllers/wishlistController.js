const express = require("express");
const Wishlist = require("../models/wishlistModel");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    // const user  = req.params.id
    // const wishlist = await Wishlist.find()
    //   .populate("products")
    //   .lean()
    //   .exec();
    const wishlist = await Wishlist.find()
      .populate("products")
      .lean()
      .exec();
    return res.status(200).send({Wishlist : wishlist });
  } catch (error) {
    return res.status(500).send({ Error: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const User = req.body.userId;
    const productId = req.body.products;

    const check = await Wishlist.findOne({ userId: User }).lean().exec();
    console.log(User,productId,check)
    if (check) {
      let prodectPresent = await Wishlist.findOne({ products: productId });
      console.log("prodectPresent", prodectPresent);
      if (prodectPresent) {
        const wish = await Wishlist.findByIdAndUpdate(check._id, {
          $pull: { products: productId },
        });
        console.log(wish, "Pull");
        return res.status(201).send({ Wishlist: wish });
      }
      else {
        const wish = await Wishlist.findByIdAndUpdate(check._id, {
          $push: { products: productId },
        });
        console.log(wish, "push");
        return res.status(201).send({ Wishlist: wish });
      }
      
    } else {
      console.log("req.body",req.body)
      const wish = await Wishlist.create(req.body);
      console.log(wish,"Out")
      return res.status(201).send({ Wishlist: wish });
    }
  } catch (error) {
    return res.status(500).send({ Error: error.message });
  }
});

router.delete("/:id/delete/:idx", async(req, res) => {
 try {
     const wish = await Wishlist.findByIdAndUpdate(req.params.id, {
       $pull: { products: req.params.idx },
     });
    // console.log("cart",cart)
    return res.status(204).send({ Wishlist: wish });
  } catch (error) {
    return res.status(500).send({ Error: error.message });
  }
});

module.exports = router