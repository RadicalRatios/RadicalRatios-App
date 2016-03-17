'use strict';

angular.module('RadicalRatios.home', ['ngRoute'])

    .controller('HomeController',['$scope', function($scope){
        $scope.name = "Home";
    }]);