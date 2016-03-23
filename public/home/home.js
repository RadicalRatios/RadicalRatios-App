'use strict';

angular.module('RadicalRatios.home', ['ngRoute'])

    .controller('HomeController',['$scope', '$location', function($scope, $location){
        $scope.name = "Welcome to Radical Ratios!";


        $scope.navToInstructor = function(){
            $location.path( "/instructor" );
        }

        $scope.navToGame = function(){
            $location.path( "/game" );
        }










    }]);