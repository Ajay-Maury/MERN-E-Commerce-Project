
const express = require("express");
const cors = require("cors");
const ProductController = require("./controllers/productController")
const app = express();
app.use(express.json());
app.use(cors());

app.use("/products",ProductController);

module.exports = app