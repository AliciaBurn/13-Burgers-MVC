var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        var burgerDataObject = {
            burgers: data
        };
        console.log(burgerDataObject);
        res.render("index", burgerDataObject);
    });
});

router.post("/api/burgers", function(req, res) {
    burger.create(
        "burger_name", [req.body.burger],function(err, result) {
            if (err) throw err;
            res.redirect("/");
          });
        });

router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);

    burger.update(
        {
        devoured: req.body.devoured
      }, condition, function(result) {
        if (result.changedRows == 0) {
          return res.status(404).end();
        } else {
          res.status(200).end();
        }
      });
    });
    

      module.exports = router;