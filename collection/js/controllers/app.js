function CollectionCtrl($scope) {
	$scope.games = {
		"FFVII": {
			"id": "001",
			"name": "Final Fantasy VII",
			"developer": "Squaresoft",
			"publisher": "Squaresoft",
			"year": "1997",
			"platform": "Playstation",
			"genre": "RPG",
			"features": {
				"players": "1",
				"blackLabel": "Yes"
			}
		},
		"SPFIIT": {
			"id": "002",
			"name": "Super Puzzle Fighter II Turbo",
			"developer": "Capcom",
			"publisher": "Capcom",
			"year": "1997",
			"platform": "Playstation",
			"genre": "Puzzle",
			"features": {
				"players": "2",
				"blackLabel": "Yes"
			}
		}
	}
}