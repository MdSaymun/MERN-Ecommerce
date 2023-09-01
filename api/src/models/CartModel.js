const mongoose = require("mongoose");

const CartItemSchema = new mongoose.Schema({
  user: { type: mongoose.Types.ObjectId, ref: "User", required: true },
  product: { type: mongoose.Types.ObjectId, ref: "Product", required: true },
  quantity: { type: Number, required: true, min: 1 },
});

const CartModel = mongoose.model("Cart", CartItemSchema);

module.exports = CartModel;
