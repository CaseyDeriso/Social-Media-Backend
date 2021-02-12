const mongoose = require("mongoose");
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


mongoose.connect("mongodb://localhost/friends", {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

app.listen(PORT, () => console.log(`😎 Connected on ${PORT}`))