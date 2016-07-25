var app = angular.module("madLib");

//controller 2
app.controller('dispCont', function($scope, libInfo, $location) {
  //Set factory data to vars
  console.log(libInfo.noun1);
  $scope.noun1 = libInfo.noun1;
  $scope.noun2 = libInfo.noun2;
  $scope.verb1 = libInfo.verb1;
  $scope.verb2 = libInfo.verb2;
  $scope.place1 = libInfo.place1;
  //Set vars to page
  $scope.again = function () {
    $location.path('/form');
  }
});
