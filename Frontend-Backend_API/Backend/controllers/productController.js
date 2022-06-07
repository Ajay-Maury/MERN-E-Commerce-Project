const express = require("express");
const Product = require("../models/productModel");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const page = +req.query._page || 1;
    const size = +req.query._limit || 10;
    const offset = (page - 1) * size;
    const lowCost = +req.query._low_cost || 0;
    const highCost = +req.query._high_cost || 1000000;
    const _colour = req.query._colour || "";
    const sort_cost = +req.query._sort_cost;
    const _rate = +req.query._rating || 0
    const _category = req.query._category || "";

    const countPages = 10
    // const countPages = Math.ceil(
    //   (await Product.find({}).countDocuments().lean().exec()) / size
    // );
    

    let products = await Product.find({
      cost: { $gte: lowCost, $lte: highCost },
      // rating: { $gte: _rate },
    })
      .sort({ cost: sort_cost })
      // .sort({rating:_rate})
      .skip(offset)
      .limit(size)
      .lean()
      .exec();
    if (_category !== "") {
      console.log(_category);
      products = products.filter((e) => e.category == _category);
    }
    if (_colour !== "") {
      console.log(_colour);
      products = products.filter((e) => e.colour == _colour);
    }
    const countDocument = products.length

    return res
      .status(200)
      .send({ suscess: "suscess",TotalITems:countDocument, products: products, TotalPages: countPages });
  } catch (error) {
    return res.status(500).send({ suscess: "failuer", Error: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    return res.status(201).send({ suscess: "suscess", product: product });
  } catch (error) {
    return res.status(500).send({ suscess: "faliure", Error: error.message });
  }
});

module.exports = router;
