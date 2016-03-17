'use strict';

// Declare app level module which depends on views, and components
angular.module('TrukSpot', ['ngRoute', 'ngResource', 'myApp.version',
    'RadicalRatios.home','TrukSpot.about', 'TrukSpot.user', 'TrukSpot.myTruck',
    'TrukSpot.services', 'RadicalRatios.instructor', 'Quintus', 'RadicalRatios.template',
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
        $routeProvider.when('/about', {
            templateUrl: 'about/about.html',
            controller: 'AboutCtrl'
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


    /* TODO: Enable when the app goes v1 */
    //.config(['$routeProvider', function($routeProvider) {
    //    $routeProvider.when('/home', {
    //        templateUrl: 'home/home.html',
    //        controller: 'HomeCtrl'
    //    });
    //}])
    //
    //.config(['$routeProvider', function($routeProvider) {
    //    $routeProvider.when('/login', {
    //        templateUrl: 'user/loginAccount.html',
    //        controller: 'LoginAccountCtrl'
    //    });
    //}])
    //
    //.config(['$routeProvider', function($routeProvider) {
    //    $routeProvider.when('/create-account', {
    //        templateUrl: 'user/createAccount.html',
    //        controller: 'CreateAccountCtrl'
    //    });
    //}])
    //
    //
    ///**
    // *  Authed routes:
    // */
    //
    //.config(['$routeProvider', function($routeProvider) {
    //    $routeProvider.when('/my-truck', {
    //        templateUrl: 'myTruck/myTruck.html',
    //        controller: 'MyTruckCtrl'
    //    });
    //}])

    /**
     *  Default route:
     */

    .config(['$routeProvider', '$resourceProvider', function($routeProvider, $resourceProvider) {
        $routeProvider.otherwise({redirectTo: '/home'});
        $resourceProvider.defaults.stripTrailingSlashes = false;
    }]);

angular.module('TrukSpot.services', ['ngResource'])

    .factory('EmailContact', ['$resource', function($resource) {
        return $resource('/api/contact');
    }]);

