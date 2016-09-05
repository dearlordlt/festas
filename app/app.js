'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ui.router',
    'myApp.view1',
    'myApp.view2',
    'myApp.version'
]).config(['$locationProvider', '$stateProvider', '$urlRouterProvider',
    function ($locationProvider, $stateProvider, $urlRouterProvider) {

        $locationProvider.html5Mode(true);

        $urlRouterProvider.otherwise('/view1');

        var helloState = {
            name: 'view1',
            url: '/view1',
            templateUrl: 'view1/view1.html'
        };

        var aboutState = {
            name: 'view2',
            url: '/view2',
            templateUrl: 'view2/view2.html'
        };

        $stateProvider.state(helloState);
        $stateProvider.state(aboutState);

    }])
;
