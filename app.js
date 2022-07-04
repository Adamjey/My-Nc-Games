const express = require("express");
const {getCategories } = require ("./controller/catg-controller")
const app = express();

//ROUTER
app.get("/api/categories", getCategories);

// custom errors

app.use("/*", (req, res, next) => {
    res.status(404).send({ msg: "Not Found" });
  });

// PSQL errors

module.exports = app;