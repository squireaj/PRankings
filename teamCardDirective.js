var app = angular.module('prankings');

angular.module('app').directive('teamCard', function(){
  return{
    scope: {
      teams: '=',
    },
    controller: function($scope){
      $scope.toggle = function(team) {
        team.details = !team.details
      }
    },
    templateUrl: "teamCard.html" ,
    restrict: "AE"
  };
})
