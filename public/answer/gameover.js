'use strict';

angular.module('RadicalRatios.gameover', [
    ])
    .controller('GameoverController', ['$scope', 'score', function($scope, score){
        $scope.score = score;
        if(score < 4) {
            $scope.starType1 = "glyphicon-star-empty";
            $scope.starType2 = "glyphicon-star-empty";
            $scope.starType3 = "glyphicon-star-empty";
        }
        else if(score < 7){
            $scope.starType1 = "glyphicon-star";
            $scope.starType2 = "glyphicon-star-empty";
            $scope.starType3 = "glyphicon-star-empty";
        }
        else if (score < 9){
            $scope.starType1 = "glyphicon-star";
            $scope.starType2 = "glyphicon-star";
            $scope.starType3 = "glyphicon-star-empty";
        }
        else{
            $scope.starType1 = "glyphicon-star";
            $scope.starType2 = "glyphicon-star";
            $scope.starType3 = "glyphicon-star";
        }

        //var x = document.getElementById("starsDiv");
        //var y = document.createElement('span');
        //y.className = "glyphicon glyphicon-star-empty star";
        //x.appendChild(y);

    }]);