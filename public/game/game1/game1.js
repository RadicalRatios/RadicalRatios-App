'use strict';

angular.module('RadicalRatios.game.game1', ['ngRoute'])

    .controller('Game1Controller',['$scope','$location', function($scope, $location){
        $scope.name = "Game 1";

        $scope.navBack = function(){
            $location.path( "/game" );
        }

    }]);