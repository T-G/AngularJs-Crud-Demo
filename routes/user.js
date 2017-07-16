var User = require("../models/user");

// =================================
// ROUTES 

// router.get("/", function(req, res){
//     res.render("landing");
// });

// // =================
// // User ROUTE
// //==================
// SHOW REGISTRATION FORM
// router.get("/register", function(req, res){
//     res.render("register");
// });
// Handle sign up logic
router.post("/create", function(req, res){
    let newUser = req.body;
    User.create(newUser, function(err, user){
        if (err){
            console.log(err);
            res.send(err.message);
            return console.error(err);
        } else {
            console.log(user);
            res.send(user);
        }
    });
});

// // Show Login Form
// router.get("/login", function(req, res){
//     res.render("login");
// });
// // Handle login
// router.post("/login", passport.authenticate("local", 
// {
//     successRedirect: "/campgrounds",
//     failureRedirect: "/login"
// }), function(req, res){
//     // you can leave it empty
// });

// // Logout route
// router.get("/logout", function(req, res){
//     req.logout();
//     req.flash("success", "Successfully Logged you out!");
//     res.redirect("/campgrounds");
// });

module.exports = router;