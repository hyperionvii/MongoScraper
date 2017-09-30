var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var NewsSchema= new Schema({
	
  title: {
    type: String
  },
  body: {
    type: String
  }
});

// Make a Note model with the NoteSchema
var News = mongoose.model("News", NewsSchema);

// Export the Note model
module.exports = News;
