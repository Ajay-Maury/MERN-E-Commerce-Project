const express = require("express")
const app = express()
const cors = require("cors");
const UserController = require("./controllers/userController")
const ProductController = require("./controllers/addressController")
const BrandController = require("./controllers/brandController")
const CategoryController = require("./controllers/categoryController")
app.use(express.json())
app.use(cors())



app.use("/user", UserController)
app.use("/products",ProductController)
app.use("/brands",BrandController)
app.use("/category", CategoryController);

module.exports = app