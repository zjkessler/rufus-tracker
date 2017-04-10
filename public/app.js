var app = angular.module('myApp', ["ngRoute", "ui.bootstrap"]);

app.config(["$routeProvider", function ($routeProvider) {
	$routeProvider
		.when('/', {
			controller: 'homeCtrl',
			templateUrl: '../templates/home-temp.html'
		})
		.when("/upgrades", {
			controller: 'upgradeCtrl',
			templateUrl: '../templates/upgrades-temp.html'
		})
		.otherwise({
			redirectTo: '/'
		})
}])