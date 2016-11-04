(function () {
'use strict';


angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);


ToBuyController.$inject = ['ShoppingListService'];
function ToBuyController(ShoppingListCheckOffService) {
  var itemDelete = this;

  itemDelete.items = ShoppingListService.getItems();

}








AlreadyBoughtController.$inject = ['ShoppingListService'];
  
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var alreadyBought = this;

}  










function ShoppingListCheckOffService() {
  var service = this;
  var items = [{ name: "cookies", quantity: 10 }, { name: "Milk", quantity: '10 bottles'}, { name: "Sugar", quantity: '3'},{ name: "ice cream", quantity: 5},{ name: "Banana", quantity: 6}];
  service.getItems = function () {
    return items;
  };
}



})();
