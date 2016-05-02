'use strict';

angular.module('RadicalRatios.game', ['ngRoute'])

    .controller('GameController',['$scope','$location', '$rootScope', function($scope, $location, $rootScope){
        $scope.name = "Wow this game is AMAZING";
       // $scope.game1score = $rootScope.game1score;
       // $scope.game1stars = $rootScope.game1stars;

        if($rootScope.game1stars === 0 || (!angular.isDefined($rootScope.game1stars))) {
            $scope.star1Type1 = "glyphicon-star-empty";
            $scope.star1Type2 = "glyphicon-star-empty";
            $scope.star1Type3 = "glyphicon-star-empty";
        }
        else if($rootScope.game1stars === 1){
            $scope.star1Type1 = "glyphicon-star";
            $scope.star1Type2 = "glyphicon-star-empty";
            $scope.star1Type3 = "glyphicon-star-empty";
        }else if($rootScope.game1stars === 2){
            $scope.star1Type1 = "glyphicon-star";
            $scope.star1Type2 = "glyphicon-star";
            $scope.star1Type3 = "glyphicon-star-empty";
        }else if($rootScope.game1stars === 3){
            $scope.star1Type1 = "glyphicon-star";
            $scope.star1Type2 = "glyphicon-star";
            $scope.star1Type3 = "glyphicon-star";
        }

        if($rootScope.game2stars === 0 || (!angular.isDefined($rootScope.game2stars))) {
            $scope.star2Type1 = "glyphicon-star-empty";
            $scope.star2Type2 = "glyphicon-star-empty";
            $scope.star2Type3 = "glyphicon-star-empty";
        }
        else if($rootScope.game2stars === 1){
            $scope.star2Type1 = "glyphicon-star";
            $scope.star2Type2 = "glyphicon-star-empty";
            $scope.star2Type3 = "glyphicon-star-empty";
        }else if($rootScope.game2stars === 2){
            $scope.star2Type1 = "glyphicon-star";
            $scope.star2Type2 = "glyphicon-star";
            $scope.star2Type3 = "glyphicon-star-empty";
        }else if($rootScope.game2stars === 3){
            $scope.star2Type1 = "glyphicon-star";
            $scope.star2Type2 = "glyphicon-star";
            $scope.star2Type3 = "glyphicon-star";
        }

        if($rootScope.game3stars === 0 || (!angular.isDefined($rootScope.game3stars))) {
            $scope.star3Type1 = "glyphicon-star-empty";
            $scope.star3Type2 = "glyphicon-star-empty";
            $scope.star3Type3 = "glyphicon-star-empty";
        }
        else if($rootScope.game3stars === 1){
            $scope.star3Type1 = "glyphicon-star";
            $scope.star3Type2 = "glyphicon-star-empty";
            $scope.star3Type3 = "glyphicon-star-empty";
        }else if($rootScope.game3stars === 2){
            $scope.star3Type1 = "glyphicon-star";
            $scope.star3Type2 = "glyphicon-star";
            $scope.star3Type3 = "glyphicon-star-empty";
        }else if($rootScope.game3stars === 3){
            $scope.star3Type1 = "glyphicon-star";
            $scope.star3Type2 = "glyphicon-star";
            $scope.star3Type3 = "glyphicon-star";
        }

        if($rootScope.game4stars === 0 || (!angular.isDefined($rootScope.game4stars))) {
            $scope.star4Type1 = "glyphicon-star-empty";
            $scope.star4Type2 = "glyphicon-star-empty";
            $scope.star4Type3 = "glyphicon-star-empty";
        }
        else if($rootScope.game4stars === 1){
            $scope.star4Type1 = "glyphicon-star";
            $scope.star4Type2 = "glyphicon-star-empty";
            $scope.star4Type3 = "glyphicon-star-empty";
        }else if($rootScope.game4stars === 2){
            $scope.star4Type1 = "glyphicon-star";
            $scope.star4Type2 = "glyphicon-star";
            $scope.star4Type3 = "glyphicon-star-empty";
        }else if($rootScope.game4stars === 3){
            $scope.star4Type1 = "glyphicon-star";
            $scope.star4Type2 = "glyphicon-star";
            $scope.star4Type3 = "glyphicon-star";
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