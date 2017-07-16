var express = require("express"),
    cors = require("cors"),
    bodyParser = require('body-parser')
    User = require('./models/user');

var app = express();
var port = process.env.PORT || 3000;

// URL Encode and JSON configuration
app.use(bodyParser.urlencoded({'extended': 'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json'}));

// configure Public directory
app.use(express.static(__dirname + '/public'));

// Enabling CORS
app.use(cors({}));

// Connect to Database
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/meandb");

// List All Users

app.get("/users", function(req, res){
    User.find({}, function(err, allUsers){
        if(err){
            res.send(err.message);
            return console.error(err);
        } else{
            res.send(allUsers)
        }
    });
});
// Handle User POST
app.post("/create", function(req, res){
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

// UPDATE USER
app.post("/update", function(req, res){
    let user = req.body;
    delete user.$$hashKey;
    User.update({_id: user._id}, user, {multi: true}, function(err, message){
        if(err){
            res.send(err.message);
            return console.error(err);
        }
        res.send(message);

    });
});

// DESTROY User
app.post("/delete", function(req, res){
    let user = req.body;
    User.remove(user, function(err, message){
        if(err){
            res.send(err.message);
            return console.error(err);
        }
        res.send(message);
    })
})

app.listen(port, function(){
    console.log(`Server is running on port ${port}`);
});