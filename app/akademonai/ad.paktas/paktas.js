'use strict';

angular.module('SatanApp.paktas', [])
	
	.controller('PaktasController', ['$scope', 'paktasFactory', function($scope, paktasFactory) {
		
		$scope.paktas = {
			vardas: '',
			pastas: '',
			pastas2: '',
			lytis: 'abominacija',
			titulas: '',
			atvykstu: '',
			kunas: '',
			apigosiki: '',
			pasiulymas: ''
		};
		
		$scope.registerAcademon = function () {
			
			var academon = {
				vardas: 'First',
				pastas: 'first@first.lt',
				lytis: 'first',
				titulas: 'first',
				atvykstu: 'first',
				kunas: 'first',
				apigosiki: 'first',
				pasiulymas: 'first'
			};
			
			paktasFactory.insertAkademons(academon).then(function(response){
				
				
				
			}, function (error) {
				
				
				
			})
			
		}
		
	}]);