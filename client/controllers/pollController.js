console.log("Poll Controller");
app.controller('pollController', ["$scope", "questionFactory", "$location", "$routeParams", function($scope, questionFactory, $location, $routeParams){
  $scope.test="Poll controller working?"
  // $scope.question = {};
  // $scope.count = 0;

console.log($routeParams.id);

  $scope.getOnePoll = function(){
    questionFactory.getOnePoll($routeParams.id, function(data){
      console.log(data);
      console.log("**************")
      $scope.poll = data;
    })
  }
  $scope.getOnePoll();

  // $scope.increment = function(){
  //   $scope.count++;
  //
  // }

  $scope.votes_one = function(id){
    console.log("in votes one function!!!");
    questionFactory.votes_one(id, function(response){
      console.log("in response of votes one");
      $scope.getOnePoll();
    })
  }
  $scope.votes_two = function(id){
    console.log("in votes one function!!!");
    questionFactory.votes_two(id, function(response){
      console.log("in response of votes one");
      $scope.getOnePoll();
    })
  }
  $scope.votes_three = function(id){
    console.log("in votes one function!!!");
    questionFactory.votes_three(id, function(response){
      console.log("in response of votes one");
      $scope.getOnePoll();
    })
  }
  $scope.votes_four = function(id){
    console.log("in votes one function!!!");
    questionFactory.votes_four(id, function(response){
      console.log("in response of votes one");
      $scope.getOnePoll();
    })
  }


}])
