console.log('Login Controller');
app.controller('loginController', ["$scope", "loginFactory", "$location", function($scope, loginFactory, $location){
  // $scope.test="Am I working...?";

  $scope.registerUser = function(user){
    // console.log(user);
    loginFactory.registerUser(user, function(data){
      if(data.hasOwnProperty('errors')){
        $scope.reg_errors = data.errors
      }else{
        alert('Thanks for registering, please sign in to continue!');
        console.log("in login controller callback", data);
      }
    })
  }

  $scope.loginUser = function(logged_user){
    // console.log("login user is:", logged_user);
    loginFactory.loginUser(logged_user, function(data){
      if(data.hasOwnProperty('errors')){
        $scope.login_errors = data.errors
      }else{
        console.log("logging in user and headed to /home route!");
        $location.path('/home');
      }
    })
  }
}])
