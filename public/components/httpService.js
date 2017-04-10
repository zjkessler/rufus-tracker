
var app = angular.module('myApp');

app.service("HttpService", ["$http", function ($http) {

	//get request for Upgrades
	this.getAllUpgrades = function () {
		return $http.get('/upgrades')
			.then(function (response) {
				return response.data;
			})
	}

	//add request for Upgrades
	this.postUpgrade = function (newUpgradeObj) {
		return $http.post("/upgrades", newUpgradeObj)
			.then(function (response) {
				return response.data;
			})
	}

	//edit request for Upgrades
	this.editUpgrades = function (editedUpgrade) {
		return $http.put(`/upgrades/${editedUpgrade._id}`, editedUpgrade)
			.then(function (response) {
				return response.data;
			})
	}

	// delete request for upgrades
	this.delete = function (upgradeId) {
		return $http.delete(`/upgrades/${upgradeId}`)
			.then(function (response) {
				return response.data;
			})
	}


}])