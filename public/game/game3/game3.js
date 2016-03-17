'use strict';

angular.module('RadicalRatios.game.game3', ['ngRoute'])

    .controller('Game3Controller',['$scope','$location', function($scope, $location){
        $scope.name = "Game 3";

        $scope.navBack = function(){
            $location.path( "/game" );
        }

    }]);