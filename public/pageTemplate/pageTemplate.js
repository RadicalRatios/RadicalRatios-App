'use strict';

angular.module('TrukSpot.about.template', ['ngRoute'])

    .controller('PageTemplateController',['$scope', function($scope){
        $scope.name = "Brian";
    }]);