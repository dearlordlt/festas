'use strict';

angular.module('SatanApp.paktas', [])
	
	.controller('PaktasController', ['$scope', 'paktasFactory', function($scope, paktasFactory) {
		
		$scope.paktas = {
			lytis: 'abominacija'
			
		};
		//$scope.paktas.lytis = 'abominacija';
		
		/*var registration = new Registration({
			name: req.body.vardas,
			username: req.body.lytis,
			password: req.body.titulas,
			admin: req.body.atvykstu,
			location: req.body.kunas,
			meta: req.body.apigosiki,
			created_at: req.body.pasiulymas
		});*/
		
		
	}]);