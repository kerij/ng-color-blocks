colorBlocks.controller('GameController', ['$scope', 'DataFactory', function($scope, DataFactory) {

console.log('game controller running');
$scope.DataFactory = DataFactory;
$scope.colors = $scope.DataFactory.colorOptions;
console.log($scope.colors);


// start game
init();

// resets game to the starting state
function init() {
  $scope.messageText = "";
  $scope.currentColor = $scope.colors[randomNumber(0, $scope.colors.length - 1)].name;
  $scope.colorPrompt = 'Can you find the ' + $scope.currentColor + ' block?'
}

// click handler for guessing colors
$scope.handleInput = function(clickedColor) {
  if(clickedColor === $scope.currentColor) {
    alert('You got it!\n\nNow try another!');
    init();
  } else {
    $scope.messageText = 'Oh no! You guessed wrong!';
  }
}

//UTILITY FUNCTIONS
function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}
}]);
