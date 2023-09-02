const mongoose = require("mongoose");
const Order = require("./OrderModel");
const CartItem= require("./CartItemModel");

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  address: String,
  phoneNumber: String,
});

// Middleware to remove associated cart items and orders when a user is deleted
userSchema.pre("remove", async function (next) {
  const userId = this._id;

  // Remove associated cart items
  await CartItem.deleteMany({ user: userId });

  // Remove associated orders
  await Order.deleteMany({ user: userId });

  next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;
