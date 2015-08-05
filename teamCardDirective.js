var app = angular.module('prankings');

app.directive('teamCard', function(){
  return{
    scope: {
      teams: '=',
    },
    controller: function($scope){
      $scope.toggle = function(team) {
        team.details = !team.details
        console.log(teams);
      }
    },
    templateUrl: "teamCard.html" ,
    restrict: "AE"
  };
})

// yourArray.forEach( function (arrayItem)
// {
//     var x = arrayItem.prop1 + 2;
//     alert(x);
// });