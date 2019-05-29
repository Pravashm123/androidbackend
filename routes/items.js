var express = require("express");
var Item = require("../models/item");
var router = express.Router();

router
  .route("/")
  .get((req, res, next) => {
    Item.find({})
      .then(
        Item => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(Item);
        },
        err => next(err)
      )
      .catch(err => next(err));
  })
  .post((req, res, next) => {
    Item.create(req.body)
      .then(
        Item => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(Item);
        },
        err => next(err)
      )
      .catch(err => next(err));
  })
  .put((req, res, next) => {
    res.statusCode = 403;
    res.end("PUT operation not supported!");
  })
  .delete((req, res, next) => {
    Item.deleteMany({})
      .then(
        reply => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(reply);
        },
        err => next(err)
      )
      .catch(err => next(err));
  });

router
  .route("/:id")
  .get((req, res, next) => {
    Item.findById(req.params.id)
      .then(
        Item => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(Item);
        },
        err => next(err)
      )
      .catch(err => next(err));
  })
  .post((req, res, next) => {
    res.statusCode = 403;
    res.end("POST operation not supported!");
  })
  .put((req, res, next) => {
    Item.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true, useFindAndModify: false }
    )
      .then(
        Item => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(Item);
        },
        err => next(err)
      )
      .catch(err => next(err));
  })
  .delete((req, res, next) => {
    Item.findByIdAndDelete(req.params.id)
      .then(
        reply => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(reply);
        },
        err => next(err)
      )
      .catch(err => next(err));
  });

module.exports = router;
