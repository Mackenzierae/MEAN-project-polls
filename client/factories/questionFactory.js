console.log('Question Factory');
app.factory('questionFactory', ['$http', "$location", function($http, $location){
  var factory = {};

  factory.newPollQuestion = function(question, callback){
  $http({
    method: "POST",
    url: "/newPQ",
    data: question
  }).then(function(res){
    console.log("this is the new Poll Question that gets back from the server:", res.data);
    callback(res.data);
  })
}

  factory.getPolls = function(callback){
    $http({
      method:'get',
      url: '/getPolls',
    }).then(function(returned_data){
      callback(returned_data.data);
    })
  }

  factory.getOnePoll = function(id, callback){
    $http({
      url: '/getOne/'+id,
      method: 'GET'
    }).then(function(question_data){
      callback(question_data.data)
    })
  }

  factory.delete = function(id, callback){
    $http({
      url: '/delete/'+id,
      method: 'POST'
    }).then(function(data){
      callback(data.data)
    })
  }

  factory.votes_one = function(answerId, callback){
  console.log('************'+ answerId+'************');
  $http({
    method: "POST",
    url: "/votes_one/"+answerId
  }).then(function(returned_data){
    console.log(returned_data.data);
    // callback(returned_data.data);
    callback();
  })
}
  factory.votes_two = function(answerId, callback){
  console.log('************'+ answerId+'************');
  $http({
    method: "POST",
    url: "/votes_two/"+answerId
  }).then(function(returned_data){
    console.log(returned_data.data);
    // callback(returned_data.data);
    callback();
  })
}
  factory.votes_three = function(answerId, callback){
  console.log('************'+ answerId+'************');
  $http({
    method: "POST",
    url: "/votes_three/"+answerId
  }).then(function(returned_data){
    console.log(returned_data.data);
    // callback(returned_data.data);
    callback();
  })
}
  factory.votes_four = function(answerId, callback){
  console.log('************'+ answerId+'************');
  $http({
    method: "POST",
    url: "/votes_four/"+answerId
  }).then(function(returned_data){
    console.log(returned_data.data);
    // callback(returned_data.data);
    callback();
  })
}

  return factory;
}]);
