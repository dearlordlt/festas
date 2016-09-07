'use strict';

angular.module('SatanApp', [

    //External satan stuff
    'ui.router',

    //Internal satan stuff
    'SatanApp.okultas',
    'SatanApp.sventove',
    'SatanApp.main'

]).config(['$locationProvider', '$stateProvider', '$urlRouterProvider',
    function ($locationProvider, $stateProvider, $urlRouterProvider) {

        /**
         * States of Hell
         */
        var okultasState = {
            name: 'okultas',
            url: '/',
            templateUrl: 'akademonai/ad.okultas/okultas.html'
        };

        var sventoveState = {
            name: 'sventove',
            url: '/sventove/',
            templateUrl: 'akademonai/ad.sventove/sventove.html'
        };

        /**
         * Sate Provider from Hell
         */
        $stateProvider.state(okultasState);
        $stateProvider.state(sventoveState);

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
