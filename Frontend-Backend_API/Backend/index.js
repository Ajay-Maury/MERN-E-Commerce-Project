
const express = require("express");
const ProductController = require("./controllers/productController")
const app = express();
app.use(express.json());


app.use("/products",ProductController);

module.exports = app