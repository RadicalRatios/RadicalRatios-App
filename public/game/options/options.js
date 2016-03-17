'use strict';

angular.module('RadicalRatios.game.options', ['ngRoute'])

    .controller('OptionsController',['$scope', '$location', function($scope, $location){
        $scope.name = "Options";

        $scope.navBack = function(){
            $location.path( "/game" );
        }

        $scope.navToLinkSession = function(){
            $location.path( "/game/options/linkSession" );
        }

    }]);