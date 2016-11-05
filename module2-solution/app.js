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
  var counter = 0;
  itemDelete.mesege = false;
  itemDelete.removeItem = function (itemIndex) {
      ShoppingListCheckOffService.removeItem(itemIndex);
      counter++;
    if(counter === ShoppingListCheckOffService.getMax()){
      itemDelete.mesege = true;
    }
}

}
AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var alreadyBought = this;
  
  alreadyBought.items = ShoppingListCheckOffService.getItemsAlrBoug();
  alreadyBought.mesege = ShoppingListCheckOffService.mesege();
}


function ShoppingListCheckOffService() {
  var service = this;
  var items = [{ name: "cookies", quantity: 10 }, { name: "Milk", quantity: '10 bottles'}, { name: "Sugar", quantity: '3'},{ name: "ice cream", quantity: 5},{ name: "Banana", quantity: 6}];
  var max = items.length;
  var boughtitems = [];
  var mesege = true;
  var counter = 0;

  service.removeItem = function (itemIdex) {
    boughtitems.push(items.splice(itemIdex, 1));
    mesege = false;
  };
  service.mesege = function () {
    return mesege;
  };
  service.getMax = function () {
    return max;
  };
  service.getItems = function () {
    return items;
  };
  service.getItemsAlrBoug = function () {
    return boughtitems;
  };
}

})();
