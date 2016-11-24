var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//messageSchema
var QuestionSchema = new mongoose.Schema({
  _user: {type: Schema.Types.ObjectId, ref: 'User'},
  question: {type: String, required:true, minlength: 8, trim: true},
  option_one: {type: String, required:true, minlength: 3, trim:true},
  option_two: {type: String, required:true, minlength: 3, trim:true},
  option_three: {type: String, required:true, minlength: 3, trim:true},
  option_four: {type: String, required:true, minlength: 3, trim:true},
  votes_one: [{type: Schema.Types.ObjectId, ref: 'User'}],
  votes_two: [{type: Schema.Types.ObjectId, ref: 'User'}],
  votes_three: [{type: Schema.Types.ObjectId, ref: 'User'}],
  votes_four: [{type: Schema.Types.ObjectId, ref: 'User'}]
},{timestamps:true});

mongoose.model('Question', QuestionSchema);
