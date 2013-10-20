function CollectionCtrl($scope, Games) {
	$scope.setActive = function(linkName) {
		$scope.currentView = linkName;
	}

	$scope.games = Games.query();
	$scope.newGame = {};

	$scope.addGame = function() {
		Games.save($scope.newGame, function(data) {
			$scope.games.push($scope.newGame);
		});
	}

	$scope.removeGame = function(chosen) {
		var chosenID = chosen.game.id;
		Games.save($scope.chosen, function(data) {
			for (var i = 0; i < $scope.games.length; ++i) {
				if ($scope.games[i].id == chosenID) {
					$scope.games.splice(i, 1);
				}
			}
		});
	}
}