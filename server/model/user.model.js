var mongoose = require('mongoose');
  var Schema = mongoose.Schema;

  var userSchema = new Schema({
  	first_name : String,
  	last_name : String,
  	dob : String,
  	email : String,
  	password : String,
    city:String
    

  	}

 
  	);

 

  module.exports = mongoose.model('users',userSchema);
  
