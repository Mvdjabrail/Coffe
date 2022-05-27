const mongoose = require("mongoose");

const drinksSchema = mongoose.Schema({
  coffeName: String,
  price: Number,
  available: Boolean,
  cofein: Boolean,
  volume: Number,
  description: String,
});


const Drinks = mongoose.model("Drinks", drinksSchema);

module.exports = Drinks;
