'use strict';

// Declare app level module which depends on views, and components
angular.module('TrukSpot', ['ngRoute', 'ngResource', 'myApp.version',
    'TrukSpot.home','TrukSpot.about', 'TrukSpot.user', 'TrukSpot.myTruck',
    'TrukSpot.services', 'TrukSpot.about.test', 'Quintus'
])
    /**
     *  Non-authed routes:
     */

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/about', {
            templateUrl: 'about/about.html',
            controller: 'AboutCtrl'
        });
    }])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/about/test', {
            templateUrl: 'instructor/templates/instructor.html',
            controller: 'InstructorController'
        });
    }])


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
        $routeProvider.otherwise({redirectTo: '/about'});
        $resourceProvider.defaults.stripTrailingSlashes = false;
    }]);

angular.module('TrukSpot.services', ['ngResource'])

    .factory('EmailContact', ['$resource', function($resource) {
        return $resource('/api/contact');
    }]);

