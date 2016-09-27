'use strict';

angular.module('SatanApp.services',[])
	.service('blasphemerSrv', ['$http', function ($http) {
		
		var blasphemer = {};
		
		blasphemer.username = '';
		blasphemer.avatar = '';
		blasphemer.message = '';
		
		blasphemer.getBlasphemes = function (limit,skip) {
			return $http({
				url: 'http://akademonai.nim.lt:9001/api/posts',
				method: 'GET',
				params: {
					'limit': limit,
					'skip': skip
				}
			});
		};
		blasphemer.post = function (obj) {
			return $http({
				url: 'http://akademonai.nim.lt:9001/api/posts',
				method: 'POST',
				data: {
					'username' : blasphemer.username,
					'message' : blasphemer.message,
					'avatar': blasphemer.avatar
				}
			});
		};
		
		return blasphemer;
		
		/*
		 GET: http://localhost:9001/api/posts?limit=3&skip=0
		 POST: http://localhost:9001/api/posts/ pvz: {"username" : "user1", "message" : "first!"}*/
		
	}]);