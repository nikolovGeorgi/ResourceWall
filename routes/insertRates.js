"use strict";

const express = require('express');
const router = express.Router();

module.exports = (knex) => {
  router.post("/", (req, res) => {
    let r = req.body;
    let tempStar = r.rate
    let date = new Date();
    knex.insert({user_id: req.session.user_id, url_id: r.urlid, rating: r.rate, created_at: date})
      .into("rates")
      .asCallback(function(err) {
        if (err) {
          console.log(err);
        }
        // res.redirect('/');
      });
  });
  return router;
}
