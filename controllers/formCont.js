var app = angular.module("madLib");

//controller 1
app.controller('formCont', function($scope, libInfo, $location) {

  //Get info from form
  console.log(libInfo.pony);
  $scope.getInfo = function() {
    console.log(libInfo.pony);
    libInfo.noun1 = $scope.noun1;
    libInfo.noun2 = $scope.noun2;
    libInfo.verb1 = $scope.verb1;
    libInfo.verb2 = $scope.verb2;
    libInfo.place1 = $scope.place1;
    console.log(libInfo.noun1);
    $location.path("/display");
  }
  //save info to factory
});
