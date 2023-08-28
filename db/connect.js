const mongoose = require("mongoose");
const connectDB = (connectionString) => {
  return mongoose
    .connect(connectionString)
    .then(() => {
      console.log("Connect to the DB....");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = connectDB;
