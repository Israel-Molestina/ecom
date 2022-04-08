const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");
const dateFormat = require("../utils/dateFormat");

const userSchema = new Schema({
  nameFirst: {
    type: String,
    required: true,
    unique: false,
  },
  nameLast: {
    type: String,
    required: false,
    unique: false,
  },
  nameFull: {
    type: String,
    required: false,
    unique: false,
  },
  admin: {
    type: Boolean,
  },
  
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  modifiedAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
});
