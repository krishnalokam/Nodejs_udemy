const express = require("express");

const path = require("path");

const router = express.Router();
const productRoutes = require("../controllers/products");

router.get("/add-product", productRoutes.getAddProduct);
router.post("/add-product", productRoutes.postAddProduct);

// router.post("/product", (req, res, next) => {
//   console.log("admin/product", JSON.stringify(req.body));
//   res.redirect("/");
// });

// module.exports = router;
// exports.routes = router;
// exports.products = products;
module.exports = router;
