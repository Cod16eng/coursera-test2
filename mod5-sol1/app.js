<<<<<<< HEAD
(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

 LunchCheckController.$inject = ['$scope'];
 function LunchCheckController($scope) {
     $scope.name = "";
     $scope.CheckIfToMuch = function () {
           var x = $scope.name.split(",");
           var message;

           for (var i = 0; i < x.lenght; i++){

           }

           if (x=="") {
                message = "Please enter data first";
           } else if (x <3) {
               message = "Enjoy";
           } else  {
               message = "Too much";
           }

console.log(x);
    $scope.message = message;
     };
   }
=======
>>>>>>> 780ab512d332aba419498df5261db94f6beae5b1

(function (){
'use strict'

angular.module('LunchCheck',[])

.controller('LunchCheckController',LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {

  $scope.name = "";

  $scope.CheckIfToMuch = function (){
    $scope.submessage = "";
    var result = check($scope.name);
    var total = result[0];
    if (total == 0){
      $scope.message = "Please enter data first";


    }else if (total <= 3){
      $scope.message = "Enjoy!";

    }else{
      $scope.message = "Too much!";

    }
    var num_of_empty = result[1];

  };

  function check(string){
    var arr = string.split(",");
    var arrayLength = arr.length;

    var num_of_empty = 0;
    var total = 0;
    for (var i = 0; i < arrayLength; i++) {
      if (arr[i].trim() == "") {
        
        if (i != arrayLength-1) {
          num_of_empty += 1;
        }
      }else{
        total += 1;
      }
    }
    console.log(num_of_empty);
    var result = [total,num_of_empty];
    return result;
  };

}


})();
