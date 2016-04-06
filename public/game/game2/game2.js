'use strict';

angular.module('RadicalRatios.game.game2', ['ngRoute'])

    .controller('Game2Controller',['$scope','$location', function($scope, $location){
        $scope.name = "Game 2";

        $scope.navBack = function(){
            $location.path( "/game" );
        }

    }]);