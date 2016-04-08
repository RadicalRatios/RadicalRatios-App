'use strict';

angular.module('RadicalRatios.answer', [
    ])
    .controller('IncorrectController', ['$scope', 'answer', function($scope, answer){
        $scope.answer = answer;

    }]);