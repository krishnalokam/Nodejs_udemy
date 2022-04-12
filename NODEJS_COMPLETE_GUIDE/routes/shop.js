const express = require("express");
const path = require("path");
const rootDir = require("../util/path");
const router = express.Router();
const adminRoutes = require("../routes/admin");

const productsController = require("../controllers/products");

router.get("/", productsController.getProducts);

module.exports = router;
