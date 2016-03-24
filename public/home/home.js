'use strict';

angular.module('RadicalRatios.home', ['ngRoute'])

    .controller('HomeController',['$scope', '$location', function($scope, $location){
        $scope.name = "Welcome to Radical Ratios!";


        $scope.navToGame = function(){
            $location.path( "/game" );
        }










    }]);