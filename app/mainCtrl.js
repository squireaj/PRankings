var app = angular.module('prankings');

app.controller('mainCtrl', function($scope){
  $scope.teams = [
    {
    rank: "1st",
    details: false, 
    name: "Seahawks",
    logo: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ9betAX3xR0tP4wlwLSkM4YkGoTYiUv1dPGrfSmGCDngCFNR7bEdnH_wxy",
    bestPlayer: "Kam Chancellor"
  },
  {
    rank: "2nd",
    details: false, 
    name: "New England Patriots",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b9/New_England_Patriots_logo.svg/1280px-New_England_Patriots_logo.svg.png",
    bestPlayer: "Tom Brady"
  },
    {
    rank: "3rd",
    details: false, 
    name: "Green Bay Packers",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Green_Bay_Packers_logo.svg/2000px-Green_Bay_Packers_logo.svg.png",
    bestPlayer: "Aaron Rogers"
  },
    {
    rank: "4th",
    details: false, 
    name: "Indianapolis Colts",
    logo: "http://prod.static.colts.clubs.nfl.com/nfl-assets/img/gbl-ico-team/IND/logos/home/large.png",
    bestPlayer: "Andrew Luck"
  },
    {
    rank: "5th",
    details: false, 
    name: "Denver Broncos",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/44/Denver_Broncos_logo.svg/1280px-Denver_Broncos_logo.svg.png",
    bestPlayer: "Payton Manning"
  },
    {
    rank: "6th",
    details: false, 
    name: "Dallas Cowboys",
    logo: "http://rs957.pbsrc.com/albums/ae57/squazguert/406.gif~c200",
    bestPlayer: "Tony Romo"
  },
    {
    rank: "7th",
    details: false, 
    name: "Baltimore Ravens",
    logo: "http://tiger.towson.edu/~afield4/404px-Baltimore_Ravens_logo.svg.png",
    bestPlayer: "Joe Flacco"
  }
  ]
  $scope.details = true;
  $scope.toggle = function(){
    $scope.details = !$scope.details;
  };
});