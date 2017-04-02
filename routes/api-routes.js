// Dependencies
var db = require("../models");

// Routes
module.exports = function(app) {

    app.get("/api/teachers", function(req, res) {
        db.teachers.findAll({})
            .then(function(dbteachers) {
                res.json(dbteachers);
            });
    });

    app.post("/api/newteacher", function(req, res) {
        db.teachers.create({
                fullName: req.body.fullName,
                phoneNumber: req.body.phoneNumber,
                email: req.body.email,
                schedule: req.body.schedule,
                notes: req.body.notes,
                // active: req.body.active
            })
            .then(function(dbteachers) {
                res.json(dbteachers);
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