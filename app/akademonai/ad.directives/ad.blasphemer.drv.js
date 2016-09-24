angular.module('SatanApp.directives', []).directive('blasphemer', function() {
    return {
        scope: {},
        templateUrl: '/akademonai/ad.directives/ad.blasphemer.drv.html',
        controller: ['$scope', function($scope) {
            $scope.test = 'test';
        }]
    }
});