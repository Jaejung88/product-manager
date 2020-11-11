const Product = require("../models/products.model");
const mongoose = require("mongoose");

module.exports = {
    index: (req, res) => {
        Product.find()
            .then(data => res.json({results: data}))
            .catch(err => res.json(err.erros))
    },
    create: (req, res) => {
        Product.create(req.body)
            .then(data => res.json({results: data}))
            .catch(err => res.json(err.errors))
    },
    show: (req, res) => {
        Product.findOne({_id: req.params.id})
            .then(data => res.json({results: data}))
            .catch(err => res.json(err.errors))
    }
}