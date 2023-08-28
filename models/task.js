const mongoose = require("mongoose");
//setting the schema structure for the collection --> this is like creating a table structure in SQL DBs
const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "must provide a name"],
    minLength: 5,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  }
});
module.exports = mongoose.model("Task", TaskSchema);
