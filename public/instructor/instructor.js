'use strict';

angular.module('RadicalRatios.instructor', [
    'Quintus'
    ])
    .controller('InstructorController', ['$scope', '$location', function($scope, $location){
        $scope.name = "Instructor Page";

        $scope.navBack = function(){
            $location.path( "/home" );
        }



    }]);