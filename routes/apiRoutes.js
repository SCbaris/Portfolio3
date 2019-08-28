var db = require("../models");
var path = require("path");
const nodemailer=require("nodemailer");
require('dotenv').config()
module.exports = function(app) {
    
    app.post("/sendMail" , function(req, res) {
      var message = req.body.message;
      var senderEmail = req.body.senderEmail;
      var senderName = req.body.senderName;
      let transporter=nodemailer.createTransport({
        service: "gmail",
        auth : {
            user: process.env.emailUser,
            pass: process.env.emailPass,
        }
        });

        let mailOption = {
            from : "ucfhospital@gmail.com",
            to : "baris.sahin.can@gmail.com",
            subject: "New Message From Portfolio "  ,
            text: message + "\n from " + senderEmail + "\n Sender Person Name : " + senderName
        };

        transporter.sendMail(mailOption, function(err, data){
            if (err) console.log(err)
            else res.json({msg:"Email sended"})
        })
    })


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

    app.delete("/api/delete/:id", function(req, res) {
      db.Projects.destroy({
        where: {
          id: req.params.id
        }
      }).then(function(dbPost) {
        res.json(dbPost);
      });
    });



}
