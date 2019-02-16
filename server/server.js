var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');
var cors = require("cors");
var request = require('request');
var unirest = require('unirest');




var userController = require('./controller/user.controller');
var cityController = require('./controller/city.controller');



mongoose.connect('mongodb://localhost:27017/whether', {useNewUrlParser: true})
.then(() => {console.log("connected")})
.catch(err => {console.log(err)});


app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/user/signUp',userController.signUp);
app.post('/user/logIn' ,userController.logIn);

app.post('/city',cityController.addCity);
app.post('/city/get-weather', cityController.getWeather);
app.post('/city/get-weathers', cityController.getWeathers);



// unirest.get("https://AccuWeatherstefan.skliarovV1.p.rapidapi.com")
// .header("X-RapidAPI-Key", "48041b9db7msh65033dca8b9b85ep1cc850jsndae1a73b55c4")
// .header("Content-Type", "application/x-www-form-urlencoded")
// .end(function (result) {
//   console.log(result.status, result.headers, result.body);
// });






app.listen(3000);