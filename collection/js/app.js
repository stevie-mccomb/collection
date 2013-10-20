angular.module('Collection', ['ngRoute', 'collectionServices'])
	.config(collectionRouter);

function collectionRouter($routeProvider) {
	$routeProvider
		.when('/', {templateUrl: 'partials/view.html',
		controller: function($scope) {
			$scope.setActive('view');
		}})
		.when('/add', {templateUrl: 'partials/add.html',
		controller: function($scope) {
			$scope.setActive('add');
		}})
		.when('/remove', {templateUrl: 'partials/remove.html',
		controller: function($scope) {
			$scope.setActive('remove');
		}})
		.otherwise({templateUrl: 'partials/view.html',
		controller: function($scope) {
			$scope.setActive('view');
		}});
}