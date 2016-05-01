'use strict';

angular.module('RadicalRatios.instructor', [
    ])
    .controller('InstructorController', ['$scope', '$location', 'Instructor', 'Game',
        function($scope, $location, Instructor, Game){

        $scope.sessionKey = null;
        $scope.closedGameKey = null;
        $scope.instructorName = null;
        $scope.instructorNameDisplay = null;
        $scope.instructorEmail = null;
        $scope.instructorPassword = null;
        $scope.gameKey = null;

        $scope.keyGenerate = false;
        $scope.closedSession = false;
        $scope.inputError = false;
        $scope.radioModel = 'Left';

        function isEmpty(str) {
            return (!str || 0 === str.length);
        }

        $scope.generateKey = function(){
            clearAllDialog();
            $scope.keyGenerate = true;

            if(isEmpty($scope.instructorName) || isEmpty($scope.instructorEmail) || isEmpty($scope.instructorPassword)){
                $scope.inputError = true;
                $scope.messages = {first: 'Attention!',
                    second: 'You must fill in all information.'};
            }
            else {
                $scope.instructorNameDisplay = $scope.instructorName;

                Instructor.createSession($scope.instructorNameDisplay, $scope.instructorEmail, $scope.instructorPassword).then(function(resp) {
                    if (resp.data.session) {
                        $scope.session = resp.data.session;
                        $scope.sessionKey = resp.data.session.key;
                        console.log(resp.data.session);
                    }

                    $scope.inputError = false;
                    $scope.messages = {first: 'Sucess!',
                        second: "You've created a session."};
                    clearInputs();
                });
            }
        }

        $scope.closeSession = function() {
            clearAllDialog();

            if(isEmpty($scope.gameKey)){
                $scope.closedSession = true;
                $scope.inputError = true;
                $scope.messages = {first: 'Attention!',
                    second: 'You must fill in all information.'};
            }
            else {
                Instructor.closeSession($scope.gameKey).then(function() {
                    $scope.closedSession = true;
                    $scope.closedGameKey = gameKey;
                    clearInputs();
                });
            }
        }

        $scope.clearAll = function(){
            clearAllDialog();
            clearInputs();
        }

        var clearAllDialog = function(){
            $scope.keyGenerate = false;
            $scope.closedSession = false;
            $scope.messages = null;
            $scope.sessionKey = null;
            $scope.closedGameKey = null;
            $scope.inputError = false;
        }

        var clearInputs = function(){
            $scope.instructorName = null;
            $scope.instructorEmail = null;
            $scope.instructorPassword = null;
            $scope.gameKey = null;
        }


    }]);