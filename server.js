const express=  require("express");
const colors = require("colors");
const morgan = require("morgan");
const app  =express();
const port = process.env.port || 3000;
const dotenv  = require("dotenv");
const routes = require("./routes/users");
require("./conn");

dotenv.config({
    path: './config/config.env'
});
console.log(__dirname)
app.use(morgan('dev'));
app.use("/api",routes);
// app.config(dotenv);



app.listen(port,()=>{
    console.log(`server is running on ${port} port number`.blue.underline.bold);
})

