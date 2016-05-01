'use strict';

angular.module('RadicalRatios.game.game3', ['ngRoute'])

    .controller('Game3Controller',['$scope','$location', function($scope, $location){
        var GAME_CONST = 'Game3';

        $scope.name = "Game 3";

        $scope.navBack = function(){
            $location.path( "/game" );
        }

    }]);