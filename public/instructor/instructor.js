'use strict';

angular.module('RadicalRatios.instructor', [
    'Quintus'
    ])
    .controller('InstructorController', ['$scope', '$location', function($scope, $location){

        $scope.sessionKey = null;
        $scope.instructorName = null;
        $scope.instructorEmail = null;
        $scope.instructorPassword = null;
        $scope.keyMade = false;
        $scope.inputError = false;

        function isEmpty(str) {
            return (!str || 0 === str.length);
        }

        $scope.generateKey = function(){
                if(isEmpty($scope.instructorName) || isEmpty($scope.instructorEmail) || isEmpty($scope.instructorPassword)){
                    $scope.inputError = true;
                }
                else {
                    $scope.sessionKey = generateID();
                    $scope.inputError = false;
                    $scope.keyMade = true;

                    $scope.instructorName = null;
                    $scope.instructorEmail = null;
                    $scope.instructorPassword = null;
                }
        }

        $scope.navBack = function(){
            $location.path( "/home" );
        }


        function generateID()
        {
            var text = "";
            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

            for( var i=0; i < 5; i++ )
                text += possible.charAt(Math.floor(Math.random() * possible.length));

            return text;
        }


    }]);