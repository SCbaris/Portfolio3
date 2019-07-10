var db = require("../models");
var path = require("path");

module.exports = function(app) {
    app.get("/", function(req, res) {
      res.redirect('/index');
      });

    app.get("/projects", function(req, res) {
        db.Projects.findAll({}).then(function(db) {
          res.render("projects",{
            Projects: db
          });
        });
    });

    app.get("/contact", function(req, res) {
      db.Projects.findAll({}).then(function(db) {
        res.render("contact",{
          Projects: db
        });
      });
    });

    app.get("/index", function(req, res) {
      db.Projects.findAll({}).then(function(db) {
        res.render("index",{
          Projects: db
        });
      });
    });

    app.get("/api/admin", function(req, res) {
      db.Projects.findAll({}).then(function(db) {
        res.render("editModals",{
          Projects: db
        });
      });
    });

    app.get("/api/admin/edit", function(req, res) {
      db.Projects.findAll({}).then(function(db) {
        res.render("edit",{
          Projects: db
        });
      });
    });
}