const mongoose = require("mongoose");

const userModel = mongoose.Schema(
  {
    nomComplet: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    }, 
    adress: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
); 
 
module.exports.UsersModel = mongoose.model("users", userModel);
