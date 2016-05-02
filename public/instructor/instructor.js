'use strict';

angular.module('RadicalRatios.instructor', [
    ])
    .controller('InstructorController', ['$scope', '$location', 'Instructor', 'Student', 'Game',
        function($scope, $location, Instructor, Student, Game){

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

        $scope.linkSession = function() {
            var key = $scope.studentKey;
            console.log('linking session ' + $scope.studentKey + ' to ' + $scope.studentName);
            clearAllDialog();
            $scope.keyLink = true;

            if(isEmpty($scope.studentKey) || isEmpty($scope.studentName)){
                $scope.inputError = true;
                $scope.messages = {
                    third: 'Attention!',
                    fourth: 'You must fill in all information.'
                };
            } else {
                Student.joinSession($scope.studentKey, $scope.studentName).then(function(studentResp) {
                    $scope.messages = {
                        third: 'Success ' + studentResp.name + '!',
                        fourth: 'You\'ve joined the session ' + key
                    };
                });
            }
        };

        $scope.generateKey = function(){
            clearAllDialog();
            $scope.keyGenerate = true;
            $scope.inputErrorStudent = false;

            if(isEmpty($scope.instructorName) || isEmpty($scope.instructorEmail) || isEmpty($scope.instructorPassword)){
                $scope.inputErrorStudent = true;
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
                    $scope.messages = {first: 'Success!',
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
                var closedKey = $scope.gameKey;
                Instructor.closeSession(closedKey).then(function() {
                    $scope.closedSession = true;
                    $scope.closedGameKey = closedKey;
                    clearInputs();
                });
            }
        }

        $scope.clearAll = function(){
            clearAllDialog();
            clearInputs();
        }

        var clearAllDialog = function(){
            $scope.keyLink = false;
            $scope.keyGenerate = false;
            $scope.closedSession = false;
            $scope.messages = null;
            $scope.sessionKey = null;
            $scope.closedGameKey = null;
            $scope.inputError = false;
            $scope.inputErrorStudent = false;
        }

        var clearInputs = function(){
            $scope.instructorName = null;
            $scope.instructorEmail = null;
            $scope.instructorPassword = null;
            $scope.gameKey = null;
        }


    }]);