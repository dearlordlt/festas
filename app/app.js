'use strict';

angular.module('SatanApp', [

    //External satan stuff
    'ui.router',
    'ui.bootstrap',
    
    //Internal satan stuff
    'SatanApp.okultas',
    'SatanApp.sventove',
    'SatanApp.paktas',
    'SatanApp.main'
    

]).config(['$locationProvider', '$stateProvider', '$urlRouterProvider',
    function ($locationProvider, $stateProvider, $urlRouterProvider) {

        /**
         * States of Hell
         */
        var okultasState = {
            name: 'okultas',
            url: '/',
            templateUrl: 'akademonai/ad.okultas/okultas.html',
            controller: 'OkultasController'
	};

        var sventoveState = {
            name: 'sventove',
            url: '/sventove/',
            templateUrl: 'akademonai/ad.sventove/sventove.html',
            controller: 'SventoveController'
        };
        
        var paktasState = {
            name: 'paktas',
            url: '/paktas/',
            templateUrl: 'akademonai/ad.paktas/paktas.html',
            controller: 'PaktasController'
        };

        /**
         * Sate Provider from Hell
         */
        $stateProvider.state(okultasState);
        $stateProvider.state(sventoveState);
        $stateProvider.state(paktasState);

        /*$urlRouterProvider.otherwise(function ($injector) {
            var $state = $injector.get('$state');
            $state.go('home');
        });*/

        /**
         * Hell mode
         */
        $locationProvider.html5Mode(true);

    }])
;
