const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://himanshu14sept:Himanshu%401401@cluster01.c5uw51h.mongodb.net/')
    .then(() => {
        console.log("Connected to database")
    })
    .catch(() => {
        console.log("Failed to connect to database")
    })

const schema = new mongoose.Schema({
    userName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required: true
    }
})

const users = mongoose.model("users", schema);

module.exports = users;