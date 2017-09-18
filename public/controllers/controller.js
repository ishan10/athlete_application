function AppCtrl($scope, $http) {

  console.log('Hello world frm controller');
  $scope.countries = countries;
  $scope.sports = sports;

  $http.get('/athletes').success(function(response){
    console.log('I got the data I requested');
    $scope.athletelist = response;
    $scope.athlete = "";
  });

//add button click controller to add athlete into mongodb
  $scope.addAthlete = function() {
    console.log($scope.athlete);
    $http.post('/athletes',$scope.athlete).success(function(response){
    console.log(response);
    });
  };
}
