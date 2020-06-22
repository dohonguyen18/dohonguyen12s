const mongoose = require('mongoose');

const url = "mongodb+srv://dohonguyen12:dohonguyenpro14@cluster0-iorwr.mongodb.net/test";

mongoose.connect(url,{useNewUrlParser:true},(err) => {
    if(!err){ console.log("MongoDB Connection Succeeded");}
    else{
        console.log("An Error Occured");
    } 
})

require('./toy.model');