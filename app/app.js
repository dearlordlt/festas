'use strict';

angular.module('SatanApp', [

    //External satan stuff
    'ui.router',

    //Internal satan stuff
    'SatanApp.home',
    'SatanApp.about'

]).config(['$locationProvider', '$stateProvider', '$urlRouterProvider',
    function ($locationProvider, $stateProvider, $urlRouterProvider) {

        /**
         * States of Hell
         */
        var homeState = {
            name: 'home',
            url: '/home/',
            templateUrl: 'home/home.html'
        };

        var aboutState = {
            name: 'about',
            url: '/about/',
            templateUrl: 'about/about.html'
        };

        /**
         * Sate Provider from Hell
         */
        $stateProvider.state(homeState);
        $stateProvider.state(aboutState);

        /*$urlRouterProvider.otherwise(function ($injector) {
            var $state = $injector.get('$state');
            $state.go('home');
        });*/

        /**
         * Hell mode
         */
        $locationProvider.html5Mode({enabled: true, requireBase: false});

    }])
;
