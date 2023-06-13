const mongoose = require("mongoose");

var mongoURL = "mongodb+srv://wathsala2000:wathsala1234@pizza.hoolsfz.mongodb.net/mern-pizza"

mongoose.connect(mongoURL, {useUnifiedTopology:true, useNewUrlParser:true })

var db = mongoose.connection

db.on('connected', ()=>{
    console.log("MongoDB connection is succesfull");
})

db.on('error', ()=>{
    console.log('mongoDB connection failed');
})

module.exports = mongoose