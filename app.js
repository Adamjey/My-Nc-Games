const express = require("express");
const { getCategories } = require ("./controller/catg-controller")
const { getReview } = require ("./controller/review-contreller")
const app = express();




//ROUTER
app.get("/api/categories", getCategories);
app.get("/api/reviews/:review_id", getReview);


// custom errors
app.use("/*", (req, res, next) => {
    res.status(404).send({ msg: "Not Found" });
  });


app.use((err, req, res, next) => {
  res.status(500).send({ msg: "Not Found" });

  console.log(err);
});

// PSQL errors

module.exports = app;