var express = require("express");
var cors = require("cors");
var bodyParser = require('body-parser');

var app = express();
var port = 3000;

// configure Public directory
app.use(express.static(__dirname + '/public'));

// Enabling CORS
app.use(cors({}));

// URL Encode and JSON configuration
app.use(bodyParser.urlencoded({'extended': 'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json'}));

app.listen(port, function(){
    console.log(`Server is running on port ${port}`);
});