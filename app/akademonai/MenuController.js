'use strict';

angular.module('SatanApp.main', [])

    .controller('MenuController', ['$scope', '$state', function ($scope, $state) {
        $scope.$state = $state;
    }]);
