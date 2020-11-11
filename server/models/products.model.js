const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
        minlength: [3, "Title must be at least 3 characters"]
    },
    price: {
        type: Number,
        required: [true, "Price is required"],
        max: [999, "Price must be cheaper than $999"]
    },
    description: {
        type: String,
        required: [true, "Description is required"],
        minlength: [10, "Please give more description"]
    }

}, {timestamps:true})

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
