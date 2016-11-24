console.log('backend questions Controller (questions.js)');
var mongoose = require('mongoose');
var Question = mongoose.model('Question');

module.exports = {

  getAllPolls: function(req,res){
    Question.find({}).populate('_user').exec(function(err, all_polls){
      if(err){
        console.log('unable to grab questions');
        res.sendStatus(404);
      }else{
        console.log('got em allllllllllllll!!');
        res.json(all_polls);
      }
    })
  },

  newPollQuestion: function(req,res){
    console.log("in new Poll Question function in question.js!!!");
    var newPQ = new Question(req.body);
    newPQ._user = req.session.user._id;
    newPQ.save(function(show_err, result){
      console.log('trying to save new poll question.............', newPQ);
      if(show_err){
        console.log("ERRROR:", show_err)
        console.log('unable to add new poll question');
        res.json(show_err);
      }else{
        console.log('successfully add new poll question!');
        res.json(result);
      }
    })
  },

  show: function(req,res){
    Question.findOne({_id:req.params.id}).populate('_user').exec(function(err, question){
    //POPULATE
    if(err){
      console.log("it went to shit");
    }else{
      res.json(question);
    }
  })
},

  delete: function(req,res){
    console.log('IN DELETE FUNCTION IN THE BACK');
    Question.findOne({_id:req.params.id}).populate('_user').exec(function(err, question){
      console.log(question._user.id);
      console.log(req.session.user._id);
      var user = question._user.id;
      var current = req.session.user._id;
      if (user == current){
        console.log("the users match!!!");
        question.remove({}, function(err){
          if(err){
            console.log("NOOOOOOO");
            res.json(err);
          }else{
            console.log("SUCCESSFULLY DELETED!!!!");
            res.sendStatus(200);
          }
        })
      }else{
        console.log("that's the wrong user!!!!!!!! SORRY BRO");
        res.json(err);
      }
    })
  },
  //   Question.remove({_id:req.params.id}, function(err){
  //     if(err){
  //       console.log("NOOOOOOO");
  //       res.json(err);
  //     }else{
  //       console.log("SUCCESSFULLY DELETED!!!!");
  //       res.sendStatus(200);
  //     }
  //   })
  // },

  votes_one: function(req,res){
    console.log("in votes_one function in back!");
    console.log(req.params.id);
    Question.findOne({_id:req.params.id}, function(err,question){
      if(err){
        console.log('trouble finding that question!');
        res.json(err);
      }else{
        console.log("here we go trying to update query!");
        question.votes_one.push(req.session.user._id);
        question.save(function(err){
          if(err){
            res.json(err);
          }else{
            console.log("YEAH BUDDYYYYY!!!!!!!!!!!");
            res.sendStatus(200);
          }
        })
      }
    })
  },

  votes_two: function(req,res){
    console.log("in votes_one function in back!");
    console.log(req.params.id);
    Question.findOne({_id:req.params.id}, function(err,question){
      if(err){
        console.log('trouble finding that question!');
        res.json(err);
      }else{
        console.log("here we go trying to update query!");
        question.votes_two.push(req.session.user._id);
        question.save(function(err){
          if(err){
            res.json(err);
          }else{
            console.log("YEAH BUDDYYYYY!!!!!!!!!!!");
            res.sendStatus(200);
          }
        })
      }
    })
  },

  votes_three: function(req,res){
    console.log("in votes_one function in back!");
    console.log(req.params.id);
    Question.findOne({_id:req.params.id}, function(err,question){
      if(err){
        console.log('trouble finding that question!');
        res.json(err);
      }else{
        console.log("here we go trying to update query!");
        question.votes_three.push(req.session.user._id);
        question.save(function(err){
          if(err){
            res.json(err);
          }else{
            console.log("YEAH BUDDYYYYY!!!!!!!!!!!");
            res.sendStatus(200);
          }
        })
      }
    })
  },

  votes_four: function(req,res){
    console.log("in votes_one function in back!");
    console.log(req.params.id);
    Question.findOne({_id:req.params.id}, function(err,question){
      if(err){
        console.log('trouble finding that question!');
        res.json(err);
      }else{
        console.log("here we go trying to update query!");
        question.votes_four.push(req.session.user._id);
        question.save(function(err){
          if(err){
            res.json(err);
          }else{
            console.log("YEAH BUDDYYYYY!!!!!!!!!!!");
            res.sendStatus(200);
          }
        })
      }
    })
  },


}
