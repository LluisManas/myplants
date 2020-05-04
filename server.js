const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const users = require("./routes/api/user");

const app = express();

// Bodyparser Middleware
app.use(bodyParser.json());

mongoose
  .connect(
    process.env.MONGODB_URI || "mongodb://localhost:27017/plantsProject",
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB connected.."))
  .catch((err) => console.log(err));

app.use("/api/user", users);

const port = process.env.PORT || 5001;

app.listen(port, () => console.log(`Server started on port ${port}`));
