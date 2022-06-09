const express = require("express")
const Brand = require("../models/brandsModel")
const router = express.Router()

router.post("/create", async (req, res) => {
    try {
        const brand = await Brand.create(req.body)
        return res.status(201).send(brand)
    } catch (error) {
        return res.status(500).send("Error",error.message)
    }
})

router.get("/", async (req, res) => {
    try {
        const brand = await Brand.find({}).lean().exec()
        return res.status(201).send(brand)
    } catch (error) {
        return res.status(500).send("Error ",error.message)
    }
})

router.get("/:id", async (req, res) => {
    try {
        const brand = await Brand.findById(req.params.id).lean().exec()
        return res.status(200).send(brand)
    } catch (error) {
        return res.status(500).send("Error ",error.message)
    }
})
router.patch("/:id/edit", async (req, res) => {
    try {
        const brand = await Brand.findByIdAndUpdate(req.params.id,req.body)
        return res.status(201).send(brand)
    } catch (error) {
        return res.status(500).send("Error ",error.message)
    }
})
router.delete("/:id/delete", async (req, res) => {
    try {
        const brand = await Brand.findByIdAndDelete(req.params.id).lean().exec()
        return res.status(200).send(brand)
    } catch (error) {
        return res.status(500).send("Error ",error.message)
    }
})

module.exports = router