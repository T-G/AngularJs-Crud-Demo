var express = require("express"),
    cors = require("cors"),
    bodyParser = require('body-parser')
    User = require('./models/user');

var app = express();
var port = process.env.PORT || 3000;

var userRoutes  = require("./routes/user");

// configure Public directory
app.use(express.static(__dirname + '/public'));

// Enabling CORS
app.use(cors({}));

// Connect to Database
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/meandb");

// URL Encode and JSON configuration
app.use(bodyParser.urlencoded({'extended': 'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json'}));

app.listen(port, function(){
    console.log(`Server is running on port ${port}`);
});