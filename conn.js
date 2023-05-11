const express = require("express");
const mongoose = require("mongoose");


mongoose.set("strictQuery" ,true);

mongoose.connect("mongodb://127.0.0.1:27017/todoapi").then(()=>{
    console.log("database is connected".bgBlue.bold);
}).catch((e)=>{
    console.log(e);
})