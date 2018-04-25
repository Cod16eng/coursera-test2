(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

 LunchCheckController.$inject = ['$scope'];
 function LunchCheckController($scope) {
     $scope.name = "";
     $scope.CheckIfToMuch = function () {
           var x = $scope.name.split(',') ;
           var message;
           if (x==""){
                message = "Please enter data first";
           } else if (x < 3) {
               message = "Enjoy";
           } else  {
               message = "Too much";
           }

    $scope.message = message;
     };
   }




})();
