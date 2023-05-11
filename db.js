const mongoose = require("mongoose");

const createschema = new mongoose.Schema({
    username : {
        type : String,
        require : true
    },
    avatar:{
        type : String
    },
    email : {
            type : String,
            require: true
    },
    password : {
        type : String,
        require : true
    }
})

const mymodel = new mongoose.model("todoapi", createschema);


module.exports = mymodel;