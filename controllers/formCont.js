var app = angular.module("madLib");

//controller 1
app.controller('formCont', function($scope, libInfo) {

  //Get info from form
  $scope.getInfo = function($scope, libInfo) {
    libInfo.noun1 = $scope.noun1;
    console.log(libInfo.noun1);
  }
  //save info to factory
});
