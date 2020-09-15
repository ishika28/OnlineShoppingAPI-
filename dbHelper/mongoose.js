const mongoose = require("mongoose");

const url = "mongodb://localhost:27017/OnlineShopping";
const connect = mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

connect.then(
  db => {
    console.log(
      "Connected to OnlineShopping Database on MongoDB Server at port 27017"
    );
  },
  err => {
    console.log(err);
  }
);