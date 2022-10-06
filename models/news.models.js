const mongoose = require("mongoose");

const newsSchema = mongoose.Schema({
  title: String,
  text: String,
  categories:{
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'categories'
    
  }

});

const News = mongoose.model('News', newsSchema);

module.exports = News;



