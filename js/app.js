angular.module("app", ['ngMessages'])
	.controller("MainCtrl", function($scope) {
		$scope.mealPrice;
		$scope.taxRate;
		$scope.tipPer;
		$scope.subTotal = 0;
		$scope.thisTip = 0;
		$scope.thisTotal = 0;
		$scope.tipTotal = 0;
		$scope.avgTip = 0;
		$scope.mealCount = 0;
		$scope.errorShow = false;

	$scope.submit = function() {
		if ($scope.mealForm.$valid) {
			$scope.errorShow = false;
			$scope.subTotal = $scope.mealPrice * $scope.taxRate/100 + $scope.mealPrice;
			$scope.thisTip = $scope.mealPrice * $scope.tipPer/100;
			$scope.thisTotal = $scope.subTotal + $scope.thisTip;
			$scope.tipTotal = $scope.tipTotal + $scope.thisTip;
			$scope.mealCount++;
			$scope.avgTip = $scope.tipTotal / $scope.mealCount;
			//$scope.cancel();
		}
		else {
			$scope.errorShow = true;
		};
	};

	$scope.cancel = function() {
		delete $scope.mealPrice;
		delete $scope.taxRate;
		delete $scope.tipPer;
		$scope.errorShow = false;
	};

	$scope.reset = function() {
		$scope.cancel();
		$scope.tipTotal = 0;
		$scope.avgTip = 0;
		$scope.mealCount = 0;
		delete $scope.subTotal;
		delete $scope.thisTip;
		delete $scope.thisTotal;
	};
});