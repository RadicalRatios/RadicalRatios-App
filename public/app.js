'use strict';

// Declare app level module which depends on views, and components
angular.module('RadicalRatios', ['ngRoute', 'ngResource', 'ui.bootstrap', 'myApp.version',
    'RadicalRatios.home', 'RadicalRatios.instructor', 'RadicalRatios.answer', 'Quintus', 'RadicalRatios.template',
    'RadicalRatios.game','RadicalRatios.game.game3','RadicalRatios.game.game4', 'RadicalRatios.game.options',
    'RadicalRatios.game.options.linkSession','RadicalRatios.game.game1','RadicalRatios.game.game2',
    'RadicalRatios.navBar'
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
        $routeProvider.when('/game/game1', {
            templateUrl: 'game/game1/templates/game1.html',
            controller: 'Game1Controller'
        });
    }])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/game/game2', {
            templateUrl: 'game/game2/templates/game2.html',
            controller: 'Game2Controller'
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
