var cityModel = require('../model/city.model');
var userModel = require('../model/user.model');
var cityController = {}
var request = require('request');
var kelvinToCelsius = require('kelvin-to-celsius');

cityController.addCity = function(req,res){

	console.log("post______++++++",req.body);

	var city = new cityModel(req.body);
	console.log("addcity",city);
	city.save(function(err,savedUser){
		console.log(savedUser);
		res.send(savedUser);

	})
}

cityController.getWeather = function(req, res){

	console.log("detail_+_+_+_{}{}{}{}{}{}",res);

	var apiKey = '3cf5b5836ae76562bb866187781ef6b7';
	var city = req.body.data;
	console.log("city++_+_+_+_",city);
	var url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
	request(url, function (err, response, body) {
		if(err){
			console.log('error:', err);
		} else {
			let weather = JSON.parse(body)
			console.log("body+++++++",body);
			var finaltemp=kelvinToCelsius(weather.main.temp);
			console.log("celsius===-=-=",finaltemp);

			let message = `It's ${finaltemp} degrees in ${weather.name}!`;
			console.log(message);
			console.log('body:', body);
			var finaltemp=kelvinToCelsius(weather.main.temp);
			console.log("celsius===-=-=",finaltemp);

			var data={
				temp:finaltemp,
				city:weather.name
			}
			res.status(200).send(data);
		}
	});
}

cityController.getWeathers = function(req, res){

	console.log("detail_+_+_+_{}{}{}{}{}{}",res);

	var apiKey = '3cf5b5836ae76562bb866187781ef6b7';
	var city = req.body.city;
	console.log("city++_+_+_+_",city);
	var url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
	request(url, function (err, response, body) {
		if(err){
			console.log('error:', err);
		} else {
			let weather = JSON.parse(body)
			console.log("body+++++++",body);
			var finaltemp=kelvinToCelsius(weather.main.temp);
			console.log("celsius===-=-=",finaltemp);

			let message = `It's ${finaltemp} degrees in ${weather.name}!`;
			console.log(message);
			console.log('body:', body);
			var finaltemp=kelvinToCelsius(weather.main.temp);
			console.log("celsius===-=-=",finaltemp);

			var data={
				temp:finaltemp,
				city:weather.name
			}
			res.status(200).send(data);
		}
	});
}
module.exports = cityController;