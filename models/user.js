var mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
    username: String,
    fullName: String,
    email: String
});

module.exports = mongoose.model("User", userSchema);
