(function() {
  'use strict!';
  angular.module('NarrowItDownApp', [])
      .controller('NarrowItDownController', ['MenuSearchService', NarrowItDownController])
      .service('MenuSearchService', ['$http', MenuSearchService])
      .directive('foundItems', FoundItems);

  function FoundItems() {
      var ddo = {
        templateUrl: 'foundList.html',
        restrict: 'A',
        scope: {
            foundItems: '<',
            onRemove: '=',
            pressed: '<'
        },
        controller: FoundItemsDirectiveController,
        controllerAs: 'narrow',
        bindToController: true
      };

      return ddo;
  };

  function FoundItemsDirectiveController() {
    var narrow = this;
    narrow.nothingFound = function() {
        if (narrow.foundItems.length == 0 && narrow.pressed)
            return true;
        return false;
    }
  };

  MenuSearchService.$inject = ['$http'];
  function MenuSearchService($http) {
    var search = this;

    search.found = [];
    search.getMatchedMenuItems = function(searchTerm) {
        var response = $http({
            method: "GET",
            url: "https://davids-restaurant.herokuapp.com/menu_items.json"
        }).then(function(response){

            var foundItems = response.data['menu_items'];

            search.found.length = 0;
            for(var i = 0; i < foundItems.length; i++) {
                var desc = foundItems[i]['description'].toLowerCase();
                if (desc.includes(searchTerm))
                   search.found.push(foundItems[i]);
            }

        });
        return response;
    };
      };
 NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService) {
      var narrow = this;

      narrow.found = MenuSearchService.found;
      narrow.search_term = "";
      narrow.pressed = false;

      narrow.searchButtonPressed = function() {

        narrow.pressed = true;
        if(narrow.search_term.trim().length == 0) {
            narrow.found.length = 0;
        } else {
            MenuSearchService.getMatchedMenuItems(narrow.search_term);
        }
      }

      narrow.onRemove = function(index) {
        narrow.found.splice(index, 1);
      }

      
  
  };
 })();
