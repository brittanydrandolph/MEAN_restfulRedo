//IMPORTS
const mongoose = require("mongoose")
const express = require("express")
const app = express()
app.use(express.json())
app.use(express.static( __dirname + '/public/dist/public/' ));

//DATABASE
mongoose.connect("mongodb://localhost/restful_task")
require("./server/configs/mongoose")

//ROUTES
require("./server/configs/routes")(app)

//PORT
app.listen(8000, function(){
    console.log("Listening on port: 8000");
})