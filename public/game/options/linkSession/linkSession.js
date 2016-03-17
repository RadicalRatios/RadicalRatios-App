'use strict';

angular.module('RadicalRatios.game.options.linkSession', ['ngRoute'])

    .controller('LinkSessionController',['$scope', '$location', function($scope, $location){
        $scope.name = "Link Session to Instructor";

        $scope.navBack = function(){
            $location.path( "/game/options" );
        }
    }]);