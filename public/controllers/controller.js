function AppCtrl($scope, $http) {
  $scope.countries = countries;
  $scope.sports = sports;
  //refresh the page with mongodb data
  var refresh = function(){
    $http.get('/athletes').success(function(response){
      console.log('I got the data I requested');
      $scope.athletelist = response;
      $scope.athlete = "";
    });
  };
  refresh();
  //add button click controller to add athlete into mongodb
  $scope.addAthlete = function() {
    console.log($scope.athlete);
    if($scope.athlete.basic.name){
    $http.post('/athletes',$scope.athlete).success(function(response){
      console.log(response);
      refresh();
    });
    }
    else
    console.log("Enter a valid name");
  };
  //edit button click controller to populate athlete from mongodb using GET
  $scope.editAthlete = function(id){
    console.log(id);
    $http.get('/athletes/'+id).success(function(response){
      console.log(response);
      $scope.athlete = response;
    });
  };
  //update button click controller to save updated athlete to mongodb using PUT method
  $scope.updateAthlete = function(){
    console.log($scope.athlete._id);
    $http.put('/athletes/'+$scope.athlete._id,$scope.athlete).success(function(response){
      refresh();
    });
  };
  //clear button to clear populated data
  $scope.clearData = function(){
    $scope.athlete="";
  };
}
