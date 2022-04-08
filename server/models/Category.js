const { Schema, model } = require("mongoose");

// creates category model
const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  }
});

const Category = model('Category', categorySchema);

module.exports = Category;
