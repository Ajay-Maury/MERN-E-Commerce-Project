const express = require("express");
const Restaurant = require("../models/RestaurantModel");
const router = express.Router();

router.get("/", async (req, res, next) => {
    try {
        const restaurant = await Restauranturant.findOne().lean().exec();
        return res.status(200).send({"Restaurants":restaurant})
    } catch (error) {
        return res.status(500).send({"error : ": error.massege});
    }
})

router.post("/", async (req, res, next) => {
    try {
        const restaurant = await Restaurant.create(req.body)
        return res.status(201).send({"Restaurants":restaurant})
    } catch (error) {
        return res.status(500).send({"error : " : error.massege})
    }
})

module.exports = router