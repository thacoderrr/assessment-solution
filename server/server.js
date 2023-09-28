const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const errorMid = require("./middleware/errorMid");
const PORT = process.env.PORT || 3001;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  //res.setaHeader('Access-Control-Allow-Headers', '*')
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};

app.use(cors(corsOptions));

// Your route handlers here

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

app.use("/", require("./routes/route"));

app.use(errorMid);

mongoose.set("strictQuery", true);
mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => {
    app.listen(PORT);
    console.log(`Connected to DB on port ${PORT}`);
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = app;
