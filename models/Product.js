const mongoose = require("mongoose");
    
const ProductSchema = new mongoose.Schema(
    {
    title: {type: String, required: true, unique: true}, 
    desc: {type: String, required: true},
    img: {type: String, required: true},
    categories: {type: String, required: true},
    size: {type: String},
    color: {type: String},
    price: {type: Number, required: true},

    },
    {timestamps: true} // replace creadtedAt and updatedAt
);

module.exports = mongoose.model("Product", ProductSchema)