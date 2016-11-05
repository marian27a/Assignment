(function () {
'use strict';


angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);



ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var itemDelete = this;
  itemDelete.items = ShoppingListCheckOffService.getItems();
  itemDelete.removeItem = function (itemIndex) {
    ShoppingListCheckOffService.removeItem(itemIndex);
  };

}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var alreadyBought = this;

  alreadyBought.items = ShoppingListCheckOffService.getItemsAlrBoug();

}


function ShoppingListCheckOffService() {
  var service = this;
 
  var items = [{ name: "cookies", quantity: 10 }, { name: "Milk", quantity: '10 bottles'}, { name: "Sugar", quantity: '3'},{ name: "ice cream", quantity: 5},{ name: "Banana", quantity: 6}];
  var boughtitems = [];

  service.removeItem = function (itemIdex) {
    boughtitems.push(items[itemIdex]);
    items.splice(itemIdex, 1);
  };

  service.getItems = function () {
    return items;
  };
  service.getItemsAlrBoug = function () {
    return boughtitems;
  };
}

})();
