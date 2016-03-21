'use strict';

// Declare app level module which depends on views, and components
angular.module('RadicalRatios', ['ngRoute', 'ngResource', 'ui.bootstrap', 'myApp.version',
    'RadicalRatios.home', 'RadicalRatios.instructor', 'Quintus', 'RadicalRatios.template',
    'RadicalRatios.game','RadicalRatios.game.game3','RadicalRatios.game.game4', 'RadicalRatios.game.options',
    'RadicalRatios.game.options.linkSession'
])
    /**
     *  Non-authed routes:
     */
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/home', {
            templateUrl: 'home/templates/home.html',
            controller: 'HomeController'
        });
    }])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/instructor', {
            templateUrl: 'instructor/templates/instructor.html',
            controller: 'InstructorController'
        });
    }])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/pageTemplate', {
            templateUrl: 'pageTemplate/templates/pageTemplate.html',
            controller: 'PageTemplateController'
        });
    }])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/game', {
            templateUrl: 'game/templates/game.html',
            controller: 'GameController'
        });
    }])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/game/game3', {
            templateUrl: 'game/game3/templates/game3.html',
            controller: 'Game3Controller'
        });
    }])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/game/game4', {
            templateUrl: 'game/game4/templates/game4.html',
            controller: 'Game4Controller'
        });
    }])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/game/options', {
            templateUrl: 'game/options/templates/options.html',
            controller: 'OptionsController'
        });
    }])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/game/options/linkSession', {
            templateUrl: 'game/options/linkSession/templates/linkSession.html',
            controller: 'LinkSessionController'
        });
    }])

    //.config(function(QProvider) {
    //    QProvider.include("Sprites, Scenes, 2D, Input").setup({ width: 800, height: 400 });
    //})

    /**
     *  Default route:
     */
    .config(['$routeProvider', '$resourceProvider', function($routeProvider, $resourceProvider) {
        $routeProvider.otherwise({redirectTo: '/home'});
        $resourceProvider.defaults.stripTrailingSlashes = false;
    }]);
