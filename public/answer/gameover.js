'use strict';

angular.module('RadicalRatios.gameover', [
    ])
    .controller('GameoverController', ['$scope', 'score', function($scope, score){
        $scope.score = score;

    }]);