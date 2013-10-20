angular.module('collectionServices', ['ngResource'])
	.factory('Games', function($resource) {
		return $resource('data/games.json');
	});