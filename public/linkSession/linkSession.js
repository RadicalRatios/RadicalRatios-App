'use strict';

angular.module('RadicalRatios.game.options.linkSession', ['ngRoute'])

    .controller('LinkSessionController',['$scope', '$location', function($scope, $location){

        $scope.instructorKey = null;
        $scope.studentName = null;
        $scope.inputError = false;

        function isEmpty(str) {
            return (!str || 0 === str.length);
        }

        $scope.linkKey = function(){
            if(isEmpty($scope.studentName) || isEmpty($scope.instructorKey)){
                $scope.keyLinked = false;
                $scope.inputError = true;
            }
            else {
                $scope.inputError = false;
                $scope.keyLinked = true;

                $scope.clearInputs();
            }
        }

        $scope.clearInputs = function(){
            $scope.instructorKey = null;
            $scope.studentName = null;
        }

        $scope.navBack = function(){
            $location.path( "/game/options" );
        }


    }]);