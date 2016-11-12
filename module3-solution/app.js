(function () {

    'use strict';
angular.module('NarrowItDownApp',[])
.controller('NarrowItDownController',NarrowItDownController)
.service('MenuSearchService',MenuSearchService)
.constant('ApiBasePath',"https://davids-restaurant.herokuapp.com/");

        NarrowItDownController.$inject=['MenuSearchService'];

        function NarrowItDownController(MenuSearchService)
        {
            var menu = this;
            var  menu_items = [];               
             
            menu.searchItems = function () {           
           menu_items =  MenuSearchService.getMatchedMenuItems(menu.search);
                console.log("In function  " + menu.search);              
                console.log("OK RESPONSE POSITIVE!");
                console.log(menu_items);
             };

                    
      }
       
        MenuSearchService.$inject = ['$http','ApiBasePath'];

        function MenuSearchService($http,ApiBasePath)
        {
            var service = this; 
            var foundItems = [];    
            service.getMatchedMenuItems = function(searchTerm)     
            {                    
                console.log("Search Term : " + searchTerm);
                var httpData = $http.get(ApiBasePath + "/menu_items.json")
                    .then(function success(httpData)
                    {
                        console.log("SUCCESS");                 
                        console.log("Status of the request: " + httpData.status); 
                        console.log("Text of response " + httpData.statusText);                         
                        foundItems = httpData.data;
                        console.log(foundItems);               
                    },
                    function error(httpData)
                    {
                       
                         console.log("FAIL");
                    });        
                return foundItems;               
            };

        }

})();

