var express = require("express");
var router = express.Router();
var User = require("../models/user");

// =================================
// ROUTES 

router.get("/", function(req, res){
    res.render("landing");
});

// =================
// User ROUTE
//==================
// SHOW REGISTRATION FORM
router.get("/register", function(req, res){
    res.render("register");
});
// Handle sign up logic
router.post("/register", function(req, res){
    let newUser = new User({username: req.body.username});
    User.register(newUser, req.body.password, function(err, user){
        if (err){
            console.log(err);
            req.flash("error", err.message);
            return res.redirect("/register");
        } else {
            passport.authenticate("local")(req, res, function(){
                req.flash("success", "Welcome to YelpCamp! " + user.username);
                res.redirect("/campgrounds");
            });
        }
    });
});

// Show Login Form
router.get("/login", function(req, res){
    res.render("login");
});
// Handle login
router.post("/login", passport.authenticate("local", 
{
    successRedirect: "/campgrounds",
    failureRedirect: "/login"
}), function(req, res){
    // you can leave it empty
});

// Logout route
router.get("/logout", function(req, res){
    req.logout();
    req.flash("success", "Successfully Logged you out!");
    res.redirect("/campgrounds");
});

module.exports = router;