var app = angular.module('prankings');

app.directive('teamCard', function(){
  return{
    scope: {
      teams: '=',
    },
    controller: function($scope){
      $scope.toggle = function(team) {
        $scope.teams.forEach(function(team){
          team.details = false;
        });
        team.details = !team.details
        console.log($scope.teams);
      }
    },
    templateUrl: "teamCard.html" ,
    restrict: "AE"
  };
})

