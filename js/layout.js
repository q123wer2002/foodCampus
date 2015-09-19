var food = angular.module('foodYenChen',['ngSanitize']);

food.controller('foodLayout',['$scope','$http',function layout($scope,$http){
	$scope.name="Food";
}]);