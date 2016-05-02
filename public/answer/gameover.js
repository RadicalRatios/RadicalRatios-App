'use strict';

angular.module('RadicalRatios.gameover', [
    ])
    .controller('GameoverController', ['$scope', '$rootScope', 'Game', 'Student', 'score', 'gameNumber', function($scope, $rootScope, Game, Student, score, gameNumber){
        $scope.score = score;

        if(score < 4) {
            $scope.starType1 = "glyphicon-star-empty";
            $scope.starType2 = "glyphicon-star-empty";
            $scope.starType3 = "glyphicon-star-empty";
            updateGlobalScore(gameNumber, 0, score);

        }
        else if(score < 7){
            $scope.starType1 = "glyphicon-star";
            $scope.starType2 = "glyphicon-star-empty";
            $scope.starType3 = "glyphicon-star-empty";
            updateGlobalScore(gameNumber, 1, score);
        }
        else if (score < 9){
            $scope.starType1 = "glyphicon-star";
            $scope.starType2 = "glyphicon-star";
            $scope.starType3 = "glyphicon-star-empty";
            updateGlobalScore(gameNumber, 2, score);
        }
        else{
            $scope.starType1 = "glyphicon-star";
            $scope.starType2 = "glyphicon-star";
            $scope.starType3 = "glyphicon-star";
            updateGlobalScore(gameNumber, 3, score);
        }

        function updateGlobalScore(game, stars, score){
            // Update server
            Game.updateScore(Student.student.sessionKey, Student.student._id, game, score).then(function(resp) {
                console.log('success', resp);
            }, function(err) {
                console.log('err', err);
            });

            // Update UI
            if(game === 1){
                if((score > $rootScope.game1score)||(!angular.isDefined($rootScope.game1score))) {
                    $rootScope.game1score = score;
                    $rootScope.game1stars = stars;
                }
            }else if (game === 2){
                if((score > $rootScope.game2score)||(!angular.isDefined($rootScope.game2score))) {
                    $rootScope.game2score = score;
                    $rootScope.game2stars = stars;
                }
            }else if (game === 3){
                if((score > $rootScope.game3score)||(!angular.isDefined($rootScope.game3score))) {
                    $rootScope.game3score = score;
                    $rootScope.game3stars = stars;
                }
            }else if (game === 4){
                if((score > $rootScope.game4score)||(!angular.isDefined($rootScope.game4score))) {
                    $rootScope.game4score = score;
                    $rootScope.game4stars = stars;
                }
            }
        }

    }]);