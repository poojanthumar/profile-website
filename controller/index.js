const User = require("../models/user");
const userMailer = require("../mailer/user-mailer");

module.exports.home = function(req, res){
    return res.render('home', {});
}

module.exports.contact = function(req, res){
    User.create(req.body, function (err, newUser){
        if(err)
        {
            console.log("Error in Adding User to Database");
        }
        else
        {
            userMailer.user(req.body);
        }
    })
    return res.redirect('back');
}
