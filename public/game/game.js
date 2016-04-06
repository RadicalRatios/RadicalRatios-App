'use strict';

angular.module('RadicalRatios.game', ['ngRoute'])

    .controller('GameController',['$scope','$location', function($scope, $location){
        $scope.name = "Wow this game is AMAZING";

        $scope.navToGame1 = function(){
            $location.path( "/game/game1" );
        }

        $scope.navToGame2 = function(){
            $location.path( "/game/game2" );
        }

        $scope.navToGame3 = function(){
            $location.path( "/game/game3" );
        }

        $scope.navToGame4 = function(){
            $location.path( "/game/game4" );
        }


        $scope.navBack = function(){
            $location.path( "/home" );
        }

    }]);