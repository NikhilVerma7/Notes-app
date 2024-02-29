const mongoose = require("mongoose");

const schema = mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },

  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  }, 
  createdAt : {
    type: Date,
    default: Date.now(),
  }, 
  updatedAt : {
    type: Date,
    default: Date.now(),
  }

}); 

const Note = mongoose.model('Note',schema);


module.exports = Note;
