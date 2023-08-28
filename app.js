const connectDB = require("./db/connect");
const express = require("express");
const app = express();
const port = 3000;
const tasks = require("./routes/tasks");
require("dotenv").config();
const notFound = require("./middleware/not-found");
//middleware
app.use(express.json()); // to get the data in req.body
//routes
app.use("/api/v1/tasks", tasks);
app.use(notFound);
const start = async () => {
  try {
    await connectDB(process.env.CONNECTION_STRING);
    app.listen(port, console.log(`server running on ${port}....`));
  } catch (error) {
    console.log(error);
  }
};

start();
