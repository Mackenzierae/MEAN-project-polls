var app = angular.module('app', ['ngRoute']);

//necessary to kick me back out to login page if not logged in
app.factory('loginInterceptor',['$q','$location',function($q, $location){
 return{
  'responseError': function(rejection){
   if (rejection.status == 401){
         $location.url('/login');
   }
   return $q.reject(rejection);
  }
 }
}])
//////

app.config(function ($routeProvider, $httpProvider){
  $httpProvider.interceptors.push('loginInterceptor');
  $routeProvider
  .when('/',{
    templateUrl: 'partials/login.html',
    controller: 'loginController'
  })
  .when('/home',{
    templateUrl: 'partials/home.html',
    controller: 'homeController'
  })
  .when('/create',{
    templateUrl: 'partials/create.html',
    controller: 'questionController'
  })
  .when('/backhome',{
    templateUrl: 'partials/home.html',
    controller: 'questionController'
  })
  .when('/poll/:id',{
  templateUrl: 'partials/poll.html',
  controller: 'pollController'
  })
  .otherwise({
    redirectTo: '/'
  })

})
