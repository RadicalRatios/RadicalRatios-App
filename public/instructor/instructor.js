'use strict';

angular.module('RadicalRatios.instructor', [
    'Quintus'
    ])
    .controller('InstructorController', ['$scope', '$location', function($scope, $location){

        $scope.sessionKey = null;
        $scope.instructorName = null;
        $scope.instructorEmail = null;
        $scope.instructorPassword = null;
        $scope.buttonDisabled = null;
        $scope.keyMade = false;



        $scope.generateKey = function(){

                $scope.sessionKey = generateID();
                $scope.keyMade = true;
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