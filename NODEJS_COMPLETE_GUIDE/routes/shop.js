const express = require("express");
const path = require("path");
const rootDir = require("../util/path");
const router = express.Router();
const adminRoutes = require("../routes/admin");

const products = adminRoutes.products;

router.get("/", (req, res, next) => {
  // res.send("<h1>Hello World</h1>");
  console.log(products);
  // res.sendFile(path.join(rootDir, "views", "shop.html"));
  res.render("shop", { prods: products, docTitle: "Shop" });
});

module.exports = router;
