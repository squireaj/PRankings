angular.module('squiresApp')
    .controller('MainController', function($scope) {
        console.log('text me bro'); 

          $scope.teams = [
    {
    rank: "1st",
    name: "Seahawks",
    logo: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ9betAX3xR0tP4wlwLSkM4YkGoTYiUv1dPGrfSmGCDngCFNR7bEdnH_wxy",
    bestPlayer: "Kam Chancellor"
  },
  {
    rank: "2nd",
    name: "New England Patriots",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b9/New_England_Patriots_logo.svg/1280px-New_England_Patriots_logo.svg.png",
    bestPlayer: "Tom Brady"
  },
    {
    rank: "3rd",
    name: "Green Bay Packers",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Green_Bay_Packers_logo.svg/2000px-Green_Bay_Packers_logo.svg.png",
    bestPlayer: "Aaron Rogers"
  },
    {
    rank: "4th",
    name: "Indianapolis Colts",
    logo: "http://prod.static.colts.clubs.nfl.com/nfl-assets/img/gbl-ico-team/IND/logos/home/large.png",
    bestPlayer: "Andrew Luck"
  },
    {
    rank: "5th",
    name: "Denver Broncos",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/44/Denver_Broncos_logo.svg/1280px-Denver_Broncos_logo.svg.png",
    bestPlayer: "Payton Manning"
  },
    {
    rank: "6th",
    name: "Dallas Cowboys",
    logo: "http://rs957.pbsrc.com/albums/ae57/squazguert/406.gif~c200",
    bestPlayer: "Tony Romo"
  },
    {
    rank: "7th",
    name: "Baltimore Ravens",
    logo: "http://tiger.towson.edu/~afield4/404px-Baltimore_Ravens_logo.svg.png",
    bestPlayer: "Joe Flacco"
  },
    {
    rank: "8th",
    name: "Philadelphia Eagles",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7f/Philadelphia_Eagles_primary_logo.svg/250px-Philadelphia_Eagles_primary_logo.svg.png",
    bestPlayer: "DeMarco Murray"
  },
  {
    rank: "9th",
    name: "Arizona Cardinals",
    logo: "http://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/ari.png?w=250&h=250&transparent=true",
    bestPlayer: "Larry Fitzgerald"
  },
  {
    rank: "10th",
    name: "Detroit Lions",
    logo: "http://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/det.png?w=250&h=250&transparent=true",
    bestPlayer: "Calvin Johnson"
  },
  {
    rank: "11th",
    name: "New Orleans Saints",
    logo: "http://content.sportslogos.net/logos/7/175/full/907.gif",
    bestPlayer: "Drew Brees"
  },
  {
    rank: "12th",
    name: "Pittsburgh Steelers",
    logo: "http://gostickit.biz/wp-content/blogs.dir/1/files/products_img/nfl-pittsburgh-steelers-nfl-logo-decal-kit-vinyl-decal-sticker.png",
    bestPlayer: "Ben Roethlisberger"
  },
  {
    rank: "13th",
    name: "San Francisco 49ers",
    logo: "http://img1.wikia.nocookie.net/__cb20120716234130/madden/images/b/b4/San_Francisco_49ers_Logo.png",
    bestPlayer: "Vernon Davis"
  },
  {
    rank: "14th",
    name: "Cincinnati Bengals",
    logo: "http://prod.static.bengals.clubs.nfl.com/nfl-assets/img/gbl-ico-team/CIN/logos/home/large.png",
    bestPlayer: "Andy Dalton"
  },
  {
    rank: "15th",
    name: "New York Giants",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/New_York_Giants_logo.svg/2000px-New_York_Giants_logo.svg.png",
    bestPlayer: "Odell Beckham jr."
  },
  {
    rank: "16th",
    name: "Kansas City Chiefs",
    logo: "http://s7d2.scene7.com/is/image/Fathead/lgo_nfl_kansas_city_chiefs?layer=comp&fit=constrain&hei=300&wid=300&fmt=png-alpha&qlt=95,0&op_sharpen=1&resMode=bicub&op_usm=0.0,0.0,0,0&iccEmbed=0",
    bestPlayer: "Tamba Hali"
  },
  {
    rank: "17th",
    name: "San Diego Chargers",
    logo: "http://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/sd.png?w=250&h=250&transparent=true",
    bestPlayer: "Philip Rivers"
  },
  {
    rank: "18th",
    name: "Miami Dolphins",
    logo: "http://www.donshulahotel.com/templates/main/images/dolphins_new.png",
    bestPlayer: "Ndamukong Suh"
  },
  {
    rank: "19th",
    name: "Buffalo Bills",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/7/77/Buffalo_Bills_logo.svg/1280px-Buffalo_Bills_logo.svg.png",
    bestPlayer: "LeSean McCoy"
  },
  {
    rank: "20th",
    name: "Atlanta Falcons",
    logo: "http://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/atl.png?w=250&h=250&transparent=true",
    bestPlayer: "Julio Jones"
  },
  {
    rank: "21st",
    name: "Carolina Panthers",
    logo: "http://upload.wikimedia.org/wikipedia/ru/4/4b/Carolina_Panthers_logo_2012.png",
    bestPlayer: "Cam Newton"
  },
  {
    rank: "22nd",
    name: "Houston Texans",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/28/Houston_Texans_logo.svg/657px-Houston_Texans_logo.svg.png",
    bestPlayer: "J.J. Watt"
  },
  {
    rank: "23rd",
    name: "Minnesota Vikings",
    logo: "http://prod.static.vikings.clubs.nfl.com/nfl-assets/img/gbl-ico-team/MIN/logos/home/large.png",
    bestPlayer: "Adrian Peterson"
  },
  {
    rank: "24th",
    name: "Chicago Bears",
    logo: "http://www.userlogos.org/files/logos/Horst724/bears_01.png",
    bestPlayer: "Jay Cutler"
  },
  {
    rank: "25th",
    name: "St. Louis Rams",
    logo: "http://americanfootballfilms.com/wp-content/uploads/2013/04/saint-louis-rams-logo-vector.png",
    bestPlayer: "Nick Foles"
  },
  {
    rank: "26th",
    name: "New York Jets",
    logo: "http://sportsteamhistory.com/images/nfllogos/new_york_jets.png",
    bestPlayer: "Darrelle Revis"
  },
  {
    rank: "27th",
    name: "Cleveland Browns",
    logo: "http://vignette2.wikia.nocookie.net/madden/images/a/ae/Cleveland_Browns_Logo.png/revision/latest?cb=20120713194714",
    bestPlayer: "Danny Shelton"
  },
  {
    rank: "28th",
    name: "Washington Redskins",
    logo: "https://upload.wikimedia.org/wikipedia/en/1/18/Washington_Redskins_1000.png",
    bestPlayer: "DeSean Jackson"
  },
  {
    rank: "29th",
    name: "Tampa Bay Buccaneers",
    logo: "https://upload.wikimedia.org/wikipedia/en/a/ae/Tampa_Bay_Buccaneers_2014.png",
    bestPlayer: "Anyone but Jameis Winston"
  },
  {
    rank: "30th",
    name: "Tennessee Titans",
    logo: "http://sportsteamhistory.com/images/nfllogos/tennessee_titans.png",
    bestPlayer: "Marcus Mariota"
  },
  {
    rank: "31st",
    name: "Oakland Raiders",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9d/Oakland_Raiders.svg/250px-Oakland_Raiders.svg.png",
    bestPlayer: "Michael Crabtree"
  },
  {
    rank: "32nd",
    name: "Jacksonville Jaguars",
    logo: "http://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/jac.png?w=250&h=250&transparent=true",
    bestPlayer: "Chris Clemons"
  }
  ]

});