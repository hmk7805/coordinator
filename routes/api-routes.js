// Dependencies
var db = require("../models");

// Routes
module.exports = function(app) {

    app.get("/api/route", function(req, res) {
        db.table1.findAll({})
            .then(function(dbtable1) {
                res.json(dbtable1);
            });
    });

    app.post("/api/route2", function(req, res) {
        console.log(req.body);
        db.table1.create({
                col1: req.body.objName,
                col2: req.body.objName2
            })
            .then(function(dbtable1) {
                res.json(dbtable1);
            });
    });

    app.get("/api/var/:var", function(req, res) {
        db.table1.findAll({
                where: {
                    var: req.params.var
                }
            })
            .then(function(dbtable1) {
                res.json(dbtable1);
            });
    });
}