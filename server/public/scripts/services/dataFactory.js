colorBlocks.factory('DataFactory', [function() {
  console.log("data factory running");
  var colors = [{name: 'red'},{name: 'blue'}, {name: 'papayawhip'}, {name: 'green'}];

  var addColor = function(color) {
    console.log(color);
    var newColor = {name: color};
    colors.push(newColor);
    console.log(colors);
  }

  return {
    colorOptions: colors,
    addColor: function(color) {
      addColor(color);
    }
  }
}]);
