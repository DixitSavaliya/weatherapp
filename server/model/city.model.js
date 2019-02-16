var mongoose = require('mongoose');
  var Schema = mongoose.Schema;

  var citySchema = new Schema({
  	
        city:String

  	}

 
  	);

 

  module.exports = mongoose.model('city',citySchema);
  
