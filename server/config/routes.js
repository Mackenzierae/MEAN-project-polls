var mongoose = require('mongoose')
var users = require('./../controllers/users.js')
var questions = require('./../controllers/questions.js')

module.exports = function(app){
  console.log("server routes");

  app.post('/users', users.register);
  app.post('/login', users.login);
  //middleware is declared to be used here
  app.use(userAuth);
  //all the routes that use the middleware before invoking their functions:
  app.get('/getCurrentUser', users.getCurrentUser);
  app.post('/newPQ', questions.newPollQuestion);
  app.get('/getPolls', questions.getAllPolls);
  app.post('/logout', users.logout);
  app.get('/getOne/:id', questions.show);
  app.post('/votes_one/:id', questions.votes_one);
  app.post('/votes_two/:id', questions.votes_two);
  app.post('/votes_three/:id', questions.votes_three);
  app.post('/votes_four/:id', questions.votes_four);
  app.post('/delete/:id', questions.delete);
}
//userAuth middleware
function userAuth(req,res,next){
  if(req.session.user){
    console.log('user has been authorized');
    next();
  }else{
    res.sendStatus(401);
  }
}
