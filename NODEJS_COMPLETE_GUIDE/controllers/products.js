const path = require("path");
const rootDir = require("../util/path");
const Product = require("../models/product");

exports.getAddProduct = (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
};

exports.postAddProduct = (req, res, next) => {
  // products.push({ title: req.body.title });
  const product = new Product(req.body.title);
  product.save();
  res.redirect("/");
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop", { prods: products, docTitle: "Shop" });
  });
  // console.log(products);
};

// exports.products = products;
