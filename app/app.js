'use strict';

angular.module('SatanApp', [

    //External satan stuff
    'ui.router',
    'ui.bootstrap',
    
    //Internal satan stuff
    'SatanApp.okultas',
    'SatanApp.sventove',
    'SatanApp.paktas',
    'SatanApp.apeigos',
    'SatanApp.pateptieji',
    'SatanApp.blasphemer',
    'SatanApp.directives',
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

        var pateptiejiState = {
            name: 'pateptieji',
            url: '/pateptieji/',
            templateUrl: 'akademonai/ad.pateptieji/pateptieji.html',
            controller: 'PateptiejiController'
        };

        var apeigosState = {
            name: 'apeigos',
            url: '/apeigos/',
            templateUrl: 'akademonai/ad.apeigos/apeigos.html',
            controller: 'ApeigosController'
        };

        var blasphemerState = {
            name: 'blasphemer',
            url: '/blasphemer/',
            templateUrl: 'akademonai/ad.blasphemer/blasphemer.html',
            controller: 'BlasphemerController'
        };

        /**
         * Sate Provider from Hell
         */
        $stateProvider.state(okultasState);
        $stateProvider.state(sventoveState);
        $stateProvider.state(paktasState);
        $stateProvider.state(pateptiejiState);
        $stateProvider.state(apeigosState);
        $stateProvider.state(blasphemerState);

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
