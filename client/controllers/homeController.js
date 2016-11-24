console.log('Home Controller');
app.controller('homeController', ["$scope", "loginFactory", "$location", function($scope, loginFactory, $location){
  $scope.test="Am I working...?";


  loginFactory.getLoggedUser(function(logged_user_data){
    $scope.logged_user = logged_user_data;
  })

  $scope.logout = function(){
    console.log('in logout function')
    loginFactory.logout(function(){
      $location.url('/');
  })}


}])
