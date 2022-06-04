const express = require("express");
const Resturent = require("../models/ResturentModel");
const router = express.Router();

router.get("/", async (req, res, next) => {
    try {
        const resturent = await Resturent.find().lean().exec()
        return res.status(200).send({"Resturents":resturent})
    } catch (error) {
        return res.status(500).send(error)
    }
})

router.post("/", async (req, res, next) => {
    try {
        const resturent = await Resturent.create(req.body)
        return res.status(201).send({"Resturents":resturent})
    } catch (error) {
        return res.status(500).send(error)
    }
})

module.exports = router