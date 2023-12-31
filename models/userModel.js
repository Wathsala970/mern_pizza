const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name : {type: String , require},
    email : {type: String , require},
    password : {type: String , require},
    address : {type: String , require},
    contactno : {type: String , require},
    isAdmin : {type: Boolean, require, default: false},
},{
    timestaps : true,
})
module.exports = mongoose.model('users', userSchema)