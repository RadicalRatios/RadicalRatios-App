'use strict';

angular.module('RadicalRatios.home', ['ngRoute', 'ngAudio'])

    .controller('HomeController',['$scope', '$location', 'ngAudio', function($scope, $location, ngAudio){
        $scope.name = "Welcome to Radical Ratios!";

        $scope.audio = ngAudio.load('sound/SleepAway.mp3');

        $scope.navToInstructor = function(){
            $location.path( "/instructor" );
        }

        $scope.navToGame = function(){
            $location.path( "/game" );
        }










    }]);