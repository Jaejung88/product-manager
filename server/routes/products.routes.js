const { models } = require('mongoose');
const ProductController = require("../controllers/products.controller")
const Product = require("../models/products.model");

module.exports = (app) => {
    app.get("/api/products", ProductController.index);
    app.post("/api/products/create", ProductController.create);
    app.get("/api/products/:_id", ProductController.show);
}