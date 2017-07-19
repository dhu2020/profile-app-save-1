var express = require("express")
var logger = require("morgan")
var bodyParser = require("body-parser")

//Create a new instance of an express app
var app = express()

app.set("view engine", "ejs")//Requires ejs behind the scenes
//Allow us to put css and images and stuff inside views folder (other static content)

app.use(express.static("views"))
//Tell app where to find views folder

app.set("views", __dirname + "/views")

app.get("/", function(request, response){
    response.render("home.ejs")
})

app.get("/profile", function(request, response){
    response.render("profile.ejs")
})

var port = process.env.PORT || 8080

app.listen(port, function(){
    console.log(`App running on ${port}.`)
})

