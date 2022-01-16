//output all products

const path = require("path");

const express = require("express");

const rootDir = require("../util/path");
const adminData = require("./admin"); // Get access to the product from admin.js. Import it here.

const router = express.Router();

router.get("/", (req, res, next) => {
  // console.log('shop.js', adminData.products); //should be the array of products
  // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
  const products = adminData.products;
  res.render("shop", {
    prods: products,
    pageTitle: "Shop",
    path: "/",
    hasProducts: products.length > 0,
    activeShop: true, //It's set to "true" to add the active class
    productCSS: true,
  });
});

//using default templating engine to return/render template

module.exports = router;
