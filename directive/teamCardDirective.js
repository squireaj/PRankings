var app = angular.module('prankings');

app.directive('teamCard', function(){
  return{
    scope: {
      teams: '=',
    },
    controller: function($scope){
      $scope.close = function(team){
        team.details = false;
      }
      $scope.toggle = function(team) {
        $scope.teams.forEach(function(team){
          team.details = false;
        });
        team.details = !team.details
      }
    },
    templateUrl: "../directive/teamCard.html" ,
    restrict: "AE"
  };
})

