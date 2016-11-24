console.log('New Poll Question Controller');
app.controller('questionController', ["$scope", "questionFactory", "$location", function($scope, questionFactory, $location){
  $scope.test="workkkk";
  $scope.all_polls = {};


  var allPolls = function(){
    questionFactory.getPolls(function(data){
      $scope.all_polls = data;
    })
  }

$scope.newPollQuestion = function(question){
  console.log(question);
  questionFactory.newPollQuestion(question, function(data){
    if(data.hasOwnProperty('errors')){
      $scope.user_errors = data.errors
    }else{
      console.log("nailed it.");
      $location.url('/backhome');
    }
  })
}

$scope.delete = function(id){
  console.log('in delete function!');
  questionFactory.delete(id, function(res){
    allPolls();
  })
}

allPolls();
}])
