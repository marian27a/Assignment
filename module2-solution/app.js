(function () {
'use strict';


angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);


ToBuyController.$inject = ['ShoppingListService'];









AlreadyBoughtController.$inject = ['ShoppingListService'];










function ShoppingListService() {
  var service = this;
  var items = [];

}



})();
