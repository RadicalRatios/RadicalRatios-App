'use strict';

angular.module('RadicalRatios.game', ['ngRoute'])

    .controller('GameController',['$scope','$location', '$rootScope', function($scope, $location, $rootScope){
        $scope.name = "Wow this game is AMAZING";
       // $scope.game1score = $rootScope.game1score;
       // $scope.game1stars = $rootScope.game1stars;

        if($rootScope.game1stars === 0 || (!angular.isDefined($rootScope.game1stars))) {
            $scope.starType1 = "glyphicon-star-empty";
            $scope.starType2 = "glyphicon-star-empty";
            $scope.starType3 = "glyphicon-star-empty";
        }
        else if($rootScope.game1stars === 1){
            $scope.starType1 = "glyphicon-star";
            $scope.starType2 = "glyphicon-star-empty";
            $scope.starType3 = "glyphicon-star-empty";
        }else if($rootScope.game1stars === 2){
            $scope.starType1 = "glyphicon-star";
            $scope.starType2 = "glyphicon-star";
            $scope.starType3 = "glyphicon-star-empty";
        }else if($rootScope.game1stars === 3){
            $scope.starType1 = "glyphicon-star";
            $scope.starType2 = "glyphicon-star";
            $scope.starType3 = "glyphicon-star";
        }



        $scope.navToGame1 = function(){
            $location.path( "/game/game1" );
        }

        $scope.navToGame2 = function(){
            $location.path( "/game/game2" );
        }

        $scope.navToGame3 = function(){
            $location.path( "/game/game3" );
        }

        $scope.navToGame4 = function(){
            $location.path( "/game/game4" );
        }


        $scope.navBack = function(){
            $location.path( "/home" );
        }

    }]);