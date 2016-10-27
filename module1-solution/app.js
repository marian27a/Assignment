(function () {
'use strict'
angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);


LunchCheckController.$inject = ['$scope'];

function LunchCheckController ($scope) {
  $scope.Check = function () {
    $scope.ArrDihes =  $scope.dishes.split(",");
    $scope.DihesNumb = $scope.ArrDihes.length;
    if (($scope.DihesNumb == 1) && ($scope.ArrDihes[0] == ""))  {$scope.Mesege = "Please enter data first" 
	} else if($scope.DihesNumb <= 3)  {$scope.Mesege = "Enjoy!"
	} else if($scope.DihesNumb > 3)  {$scope.Mesege = "Too much!"};
  };
  return $scope.Mesege
}

})();
