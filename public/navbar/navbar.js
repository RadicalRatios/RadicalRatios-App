'use strict';

angular.module('RadicalRatios.navBar', ['ngRoute'])
    .directive('navBar', function() {
    return {
        scope: true,  // use a child scope that inherits from parent
        restrict: 'AE',
        replace: 'true',
        templateUrl: '/navbar/template/navbar.html'
        };
    })
    .controller('HomeController',['$scope', function($scope){


    }]);;