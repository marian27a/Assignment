(function () {
'use strict'
angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);


LunchCheckController.$inject = ['$scope'];

function LunchCheckController ($scope) {
  $scope.dishes = '';
  $scope.ArrDihes = [];
  $scope.Check = function () {
    $scope.ArrDihes =  $scope.dishes.split(",");
  };
  return $scope.ArrDihes
}

})();
