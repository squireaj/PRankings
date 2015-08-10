var app = angular.module('prankings');

app.directive('teamCard', function(){

var controller = function($scope){
      $scope.close = function(object){
        object.details = false;
      }
      $scope.toggle = function(object) {
        $scope.scopedata.forEach(function(object){
          object.details = false;
        });
        object.details = !object.details
      }

}

  return{
    scope: {
      scopedata: '=',
      scopestring: '@',
      scopefunction: '&'
    },
    controller: controller,
    templateUrl: "../directive/teamCard.html" ,
    restrict: "AE"
  };
})

