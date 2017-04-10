var app = angular.module('myApp');

app.controller("upgradeCtrl", ["$scope", "HttpService", function ($scope, HttpService) {
	//HTTP REQUESTS
	$scope.newUpgrade = {};
	var sum = 0;

	//get request for Upgrades
	HttpService.getAllUpgrades()
		.then(function (response) {
			$scope.upgrades = response;
			response.forEach(function (upgrade) {
				sum += upgrade.price;
				$scope.total = sum;
			});
		})

	//add request for Upgrades
	$scope.addUpgrade = function (newUpgrade) {
		HttpService.postUpgrade(newUpgrade)
			.then(function (response) {
				$scope.upgrades.unshift(response);
				sum += newUpgrade.price;
				$scope.total = sum;
				$scope.newUpgrade = {};
			})
	}

	//edit request for Upgrades
	$scope.editUpgrades = function (editedUpgrade, index) {
		HttpService.editUpgrades(editedUpgrade)
			.then(function (response) {
				if (editedUpgrade.price > $scope.upgrades[index].price) {
					sum += editedUpgrade.price;
				}
				if (editedUpgrade.price < $scope.upgrades[index].price) {
					sum -= ($scope.upgrades[index] - editedUpgrade.price)
				}
				editedUpgrade.editing = false;
				$scope.upgrades[index] = editedUpgrade;
				$scope.total = sum;
			})
	}

	//delete request for Upgrades
	$scope.deleteUpgrade = function (deleteUpgrade, index) {
		HttpService.delete(deleteUpgrade._id)
			.then(function (response) {
				$scope.upgrades.splice(index, 1);
				sum -= deleteUpgrade.price;
				$scope.total = sum;
			})
	}


}]);