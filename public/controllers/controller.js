function AppCtrl($scope, $http) {

  console.log('Hello world frm controller');
  $scope.countries = countries;

  $http.get('/athletes').success(function(response){
    console.log('I got the data I requested');
    $scope.athletelist = response;
    $scope.athlete = "";
  });
}
