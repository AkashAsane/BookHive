const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const cors=require("cors")
const app = express();
dotenv.config();
app.use(express.json())
app.use(cors())

const bookRoute = require("./Routes/Book.route");
const useroutes=require("./Routes/User.route")

const PORT = process.env.PORT || 4000;
const URL = process.env.MONGODBURL;

mongoose
  .connect(URL)
  .then(() => console.log("connected to db sucessfully"))
  .catch((error) => console.log("cannot establish connection", error));

app.use("/book", bookRoute);
app.use("/user",useroutes)

app.listen(PORT, () => {
  console.log(`port started running on ${PORT}`);
});
