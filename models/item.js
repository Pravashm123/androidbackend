var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var itemSchema = new Schema({
  itemName: {
    type: String,
    required: true
  },
  itemPrice: {
    type: Number,
    required: true
  },
  itemimage: {
    type: String,
    required: true
  },
  itemImageName: {
    type: String,
    required: true
  },
  itemDescription: {
    type: String,
    required: true
  }
});
module.exports = mongoose.model("item", itemSchema);
