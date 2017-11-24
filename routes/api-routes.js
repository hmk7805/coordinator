// Dependencies
var db = require("../models");

// Routes
module.exports = function(app) {


    app.get("/api/teachers", function(req, res) {
        db.teachers.findAll({})
            .then(function(data) {
                var hdbsObj = {
                    teachers: data
                }
                res.render("teachers", hdbsObj);
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

    app.get("/profile/:id", function(req, res) {
        db.table1.findOne({
                where: {
                    uuid: req.params.id
                }
            })
            .then(function(teacher) {
                res.render("profile", teacher);
            });
    });
}