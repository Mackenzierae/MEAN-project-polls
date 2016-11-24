console.log("users.js in server/controllers");

var mongoose = require('mongoose');
var User = mongoose.model('User');
module.exports = {

  register: function(req,res){
    var errors = {errors:{
      general:{
        message: "'password' must match 'confirm password'"
      }
    }}
    console.log("in the register function in users.js");
    if (req.body.password != req.body.confpass){
      //validations::
      res.json(errors);
    }else{
      console.log("passwords are equal, we are almost there")
      var user = new User();
      user.name = req.body.name;
      user.email = req.body.email;
      user.password = req.body.password;

      user.save(function(err,user){
        if (err){
          console.log("an error creating the user:", err);
          res.json(err);
        } else {
          console.log("this is the user:", user);

          res.send(user);
        }
      })
    }
  },

  login:function(req,res){
    var errors = {errors:{
      general:{
        message: "Invalid Login Information"
      }
    }}
    console.log("in the login function in users.js!")
    User.findOne({email:req.body.email}).exec(function(err,user){
      //validations!!! :::
      if(!req.body.email||!req.body.password){
        res.json(errors);
      //else if there is no user found!!! :::
      }else if(!user){
        res.json(errors);
      }else{
        if(user.password != req.body.password){
          console.log("passwords did not match!");
          res.json(errors);
        }else{
          console.log("in the successful login function!")
          req.session.user = {
            name: user.name,
            _id: user._id
          }
          res.send(user);
        }
      }
    })
  },

  getCurrentUser: function(req,res){
    User.findOne({_id: req.session.user._id}).exec(function(err, user){
      if(err){
        res.sendStatus(400);
        console.log('could not find user in getCurrentUser of users.js');
      }else{
        console.log('success! grabbing session data and sending user in session to client as a json object')
        var logged_user = {
          name:user.name,
          email:user.email,
          _id:user._id
        }
        res.json(logged_user)
      }
    })
  },

  logout:function(req,res){
    console.log("in the logout function in users.js");
    req.session.destroy(function(){
      req.session=null;
      console.log('session destroyed:')
      console.log(req.session);
      res.sendStatus(200);
    })
  }

}
