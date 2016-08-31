colorBlocks.controller('SettingsController', ['$scope', 'DataFactory', function($scope, DataFactory) {
  console.log("settings controller running");

  $scope.DataFactory = DataFactory;
  $scope.colors = DataFactory.colorOptions;

  $scope.addColor = function() {
    console.log('color to add', $scope.colorToAdd);
    $scope.DataFactory.addColor($scope.colorToAdd);
    $scope.colorToAdd = '';
  }

}]);
