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
			
			$scope.paktas.titulas = paktasVardaiFactory.getTitle($scope.paktas.lytis, $scope.paktas.vardas);
		};
		
		$scope.validateTitulas = function () {
			//console.log($scope.paktas.vardas.length > 2 , $scope.paktas.pastas , $scope.paktas.pastas == $scope.paktas.pastas2);
			return (($scope.paktas.vardas.length > 2) && $scope.paktas.pastas && $scope.paktas.pastas == $scope.paktas.pastas2)
		};
		
		$scope.validatePoreikiai = function () {
			//console.log($scope.paktas.atvykstu.length > 0 , $scope.paktas.kunas.length > 0 , $scope.paktas.apigosiki.length > 0);
			return ($scope.paktas.atvykstu.length > 0 && $scope.paktas.kunas.length > 0 && $scope.paktas.apigosiki.length > 0)
			
		};
		
		/*console.log(paktasVardaiFactory.getTitle('istvirkelis', 'Pranas'));
		console.log(paktasVardaiFactory.getTitle('istvirkele', 'Gertrūda'));
		console.log(paktasVardaiFactory.getTitle('abominacija', 'Leonidas'));
		*/
		
		$scope.registered = false;
		
		$scope.registerAcademon = function () {
			
			var academon = {
				vardas: $scope.paktas.vardas,
				pastas: $scope.paktas.pastas,
				lytis: $scope.paktas.lytis,
				titulas: $scope.paktas.titulas,
				atvykstu: $scope.paktas.atvykstu,
				kunas: $scope.paktas.kunas,
				apigosiki: $scope.paktas.apigosiki,
				pasiulymas: $scope.paktas.pasiulymas
			};
			
			paktasFactory.insertAkademons(academon).then(function(response){
				
				$scope.registered = true;
				$scope.error = null;
				
			}, function (error) {
				$scope.registered = true;
				$scope.error = error;
				
			})
			
		}
		
	}]);