const express = require("express");
const app = express();
const cors = require("cors");
const UserController = require("./controllers/userController");
const ProductController = require("./controllers/productController");
const BrandController = require("./controllers/brandController");
const CategoryController = require("./controllers/categoryController");
const CartController = require("./controllers/cartController");
const WishlistController = require("./controllers/wishlistController");
const OrderController = require("./controllers/orderController")
app.use(express.json());
app.use(cors());

app.use("/user", UserController);
app.use("/products", ProductController);
app.use("/brands", BrandController);
app.use("/category", CategoryController);
app.use("/cart", CartController);
app.use("/wishlist", WishlistController);
app.use("/order", OrderController);

module.exports = app;
