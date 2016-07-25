// 2 controllers
// 1 factory
var app = angular.module('madLib', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/form', {
      templateUrl: 'views/form.html',
      controller: 'formCont'
    })
    .when('/display', {
      templateUrl: 'views/display.html',
      controller: 'dispCont'
    })
    .otherwise({redirectTo: '/'});
}]);
