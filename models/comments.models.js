
const mongoose = require("mongoose");

const commentsSchema = mongoose.Schema({
  name: String,
  text: String,
  news:{
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'news'
  }


});

const Comments = mongoose.model('Comments', commentsSchema);

module.exports = Comments;
