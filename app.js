const express = require("express");
const { getCategories } = require ("./controller/catg-controller")
const { getReview } = require ("./controller/review-contreller")
const app = express();




//ROUTER
app.get("/api/categories", getCategories);
app.get("/api/reviews/:review_id", getReview);


// custom errors


app.use("*", (req, res) => {
  res.status(404).send({ msg: "Not Found" });
});

app.use((err, req, res, next) => {
  if (err.msg) {
    res.status(err.status).send({ msg: err.msg });
  } else if (err.code) {
    console.log(err);
    res.status(400).send({ msg: "bad request" });
  } else {
    next(err);
  }
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send({ msg: "server error" });
});


// PSQL errors

module.exports = app;