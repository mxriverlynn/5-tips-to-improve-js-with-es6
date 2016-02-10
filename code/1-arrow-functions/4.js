var mongoose = require("mongoose");

var UserSchema = new mongoose.Schema({
  firstName: {type: String},
  lastName: {type: String},
  email: {type: String}
});


// create a read-only property called 'fullName'
//
//                                    ||  
// note the use of the arrow, here    \/
UserSchema.virtual("fullName").get(() => {
  return this.firstName + " " + this.lastName;
});


module.exports = mongoose.model(UserSchema, "Users");
