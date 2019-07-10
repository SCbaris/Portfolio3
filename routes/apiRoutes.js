var db = require("../models");
var path = require("path");
module.exports = function(app) {
    
    app.post("/custom_projects", function(req, res) {
        // check if user is logged in
        console.log(req.body)
        db.Projects.create({
          name: req.body.name,
          creators: req.body.creators,
          instructions: req.body.instructions,
          pic: req.body.pic,
          gitHub: req.body.gitHub,
          projectLink: req.body.projectLink
        })
        .then(user => console.log('success'))
        .catch(err => console.log(err))
    });
}
