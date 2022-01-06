const mongose = require("mongoose");

//user schema
const userschema = mongose.Schema({
    username: String,
    password: String,
    name: String,
    age: Number,

});

const usermodel = mongose.model("emp",userschema,"emp");

module.exports = usermodel;
