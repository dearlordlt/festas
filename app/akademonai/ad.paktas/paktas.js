'use strict';

angular.module('SatanApp.paktas', [])
	
	.controller('PaktasController', ['$scope', 'paktasFactory', 'paktasVardaiFactory', function($scope, paktasFactory, paktasVardaiFactory) {
		
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
		
		$scope.gautiTitula = function () {
			$scope.paktas.titulas = 'asdasd';
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