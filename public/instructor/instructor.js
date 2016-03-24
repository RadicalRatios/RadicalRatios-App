'use strict';

angular.module('RadicalRatios.instructor', [
    'Quintus'
    ])
    .controller('InstructorController', ['$scope', '$location', function($scope){

        $scope.sessionKey = null;
        $scope.instructorName = null;
        $scope.instructorNameDisplay = null;
        $scope.instructorEmail = null;
        $scope.instructorPassword = null;
        $scope.keyGenerate = false;
        $scope.inputError = false;
        $scope.radioModel = 'Left';

        function isEmpty(str) {
            return (!str || 0 === str.length);
        }

        $scope.generateKey = function(){
            $scope.keyGenerate = true;
            if(isEmpty($scope.instructorName) || isEmpty($scope.instructorEmail) || isEmpty($scope.instructorPassword)){
                $scope.keyMade = false;
                $scope.inputError = true;
                $scope.messages = {first: 'Attention!',
                    second: 'You must fill in all information.'};
            }
            else {
                $scope.instructorNameDisplay = $scope.instructorName;
                $scope.sessionKey = generateID();
                $scope.inputError = false;
                $scope.keyMade = true;
                $scope.messages = {first: 'Sucess!',
                    second: "You've created a session."};
                $scope.clearInputs();
            }
        }

        $scope.clearAll = function(){
            $scope.keyMade = false;
            $scope.keyGenerate = false;
            $scope.clearInputs();
        }

        $scope.clearInputs = function(){
            $scope.instructorName = null;
            $scope.instructorEmail = null;
            $scope.instructorPassword = null;
            $scope.inputError = false;
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