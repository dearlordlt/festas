'use strict';

angular.module('SatanApp.paktas')
    .factory('paktasFactory', ['$http', function($http) {

    var urlBase = 'http://akademonai.nim.lt:9001/api/registration';
    var akademonsFactory = {};

    akademonsFactory.getAkademons = function () {
        return $http.get(urlBase);
    };

    akademonsFactory.insertAkademons = function (cust) {
        return $http.post(urlBase, cust);
    };

    return akademonsFactory;
}]);