const mongoose = require('mongoose');


const authschema = mongoose.Schema({
    email:{type:String},
    password:{type:String},
});

const authModel = mongoose.model('UserAuthData',authschema);

module.exports = authModel; 