'use strict';

angular.module('RadicalRatios.game.game1', ['ngRoute'])

    .controller('Game1Controller',['$scope','$location', 'ngAudio', '$uibModal', function($scope, $location, ngAudio, $uibModal){
        var GAME_CONST = 'Game1';

        $scope.audio = ngAudio.load('sound/boopboop.wav');
        $scope.audio.volume = 1;
        $scope.audio2 = ngAudio.load('sound/boopboop.wav');
        $scope.audio2.volume = 1;
        $scope.audio3 = ngAudio.load('sound/boopboop.wav');
        $scope.audio3.volume = 1;
        var audioFlag =0;

        $scope.dividend;
        $scope.divisor;
        var level = 1;
        var correct = 0;
        $scope.questions = 0;
        $scope.max = 10;
        var levelCount = 0;
        var ans = 0;


        $scope.correctModal = function(){
            var correctModalInstance = $uibModal.open({
                templateUrl: '/answer/templates/correct.html',
                size: 'md'
            });
        }

        $scope.incorrectModal = function(){
            var incorrectModalInstance = $uibModal.open({
                templateUrl: '/answer/templates/incorrect.html',
                size: 'md',
                controller: 'IncorrectController',
                resolve: {
                    answer: function () {
                        return ans;
                    }
                }
            });
        }

        $scope.gameoverModal = function(){
            var gameoverModalInstance = $uibModal.open({
                templateUrl: '/answer/templates/gameover.html',
                size: 'md',
                controller: 'GameoverController',
                resolve: {
                    score: function () {
                        return correct;
                    },

                    gameNumber: function () {
                        return 1;
                    }
                }
            });
        }

        function newProblem(){
            $scope.questions++;
            $scope.dividend = level + Math.round((Math.random() * 2+correct/3));
            $scope.divisor  = Math.floor((Math.random() * 6)+1+level/2);

            $scope.ansMessage = "";
            $scope.displayMode = "none";

            clearObjects();
            calculate();
            newGame();
            disableButtons(false);
            addObject("newQuestion");

        }

        function addObject(t){
            var x = document.createElement('div');

            if (t == "object1") {
                x.className = t;
                document.getElementById("object1Div").appendChild(x);
            }
            else if (t == "object2") {
                x.className = t;
                document.getElementById("object2Div").appendChild(x);
            }
            else if (t == "correctAnswer"){
                var bar = document.getElementById("progressBar")
                bar.removeChild(bar.lastChild)
                x.className="progress-bar progress-bar-success";
                var y = document.createElement('span');
                y.className="glyphicon glyphicon-ok";
                x.appendChild(y);
                bar.appendChild(x);
            }
            else if (t == "wrongAnswer"){
                var bar = document.getElementById("progressBar")
                bar.removeChild(bar.lastChild)
                x.className="progress-bar progress-bar-danger";
                var y = document.createElement('span');
                y.className="glyphicon glyphicon-remove";
                x.appendChild(y);
                bar.appendChild(x);
            }
            else if (t == "newQuestion"){
                var bar = document.getElementById("progressBar")
                x.className="progress-bar progress-bar-striped progress-bar-info active ";
                bar.appendChild(x);
            }


        }


        function clearObjects(){
            var x = document.getElementById("object1Div");
            while (x.hasChildNodes()) {
                x.removeChild(x.firstChild);
            }
            var x = document.getElementById("object2Div");
            while (x.hasChildNodes()) {
                x.removeChild(x.firstChild);
            }
        }

        function newGame(){
            for (var i = 0; i < 1+Math.floor((Math.random()*8)); i ++)
                addObject("object1");

        }
        var b = document.getElementById("submit");

        b.onclick = function(){
            var o1 = getObject1Value();

            if (o1 == ans){
                $scope.correctModal();
                addObject("correctAnswer");
                correct++;
                levelCount++;
            }
            else {
                $scope.incorrectModal();
                addObject("wrongAnswer");
            }

            disableButtons(true);
            //level up
            if (levelCount/2 >= level){
                level++;
                levelCount = 0;
            }
            if ($scope.questions >= 10)
                setTimeout(endGame, 3000);
            else
                setTimeout(newProblem, 1000);
        };

        document.getElementById("addButton").onclick = function(){
            var n = getObject1Value();
            if (n < 36)
                addObject("object1");

            if(audioFlag === 0) {
                $scope.audio.play();
                audioFlag = 1;
            }
            else if(audioFlag === 1){
                $scope.audio2.play();
                audioFlag = 2;
            }
            else{
                $scope.audio3.play();
                audioFlag = 0;
            }

        }

        document.getElementById("subtractButton").onclick = function(){
            var x = document.getElementById("object1Div");
            var n = getObject1Value();
            if (n > 1){
                if (x.hasChildNodes()) {
                    x.lastChild.className = "object1delete";
                    setTimeout(function() { x.removeChild(x.lastChild); }, 200);

                }
            }
        }

        function gcm( a,  b){
            if (b == 0)
                return a;
            return gcm(b, (a % b));
        }

        function getObject1Value(){
            return document.getElementsByClassName("object1").length;
        }

        function calculate(){
            var m = gcm($scope.dividend,$scope.divisor);
            var a =  $scope.dividend / m;
            var b =  $scope.divisor / m;

//determine problem difficulty

            ans = a*level;
            for (var i = 0; i < b*level; i++){
                addObject("object2");

            }
        }



        function print(str){
            var q = document.getElementById("question");

            q.innerHTML += str;
        }

        function disableButtons(b){
            var btns = document.getElementsByTagName("button");
            for (var i = 0; i < btns.length; i++){
                btns[i].disabled = b;
            }
        }

        function endGame(){
            setTimeout(function()
            {
                $scope.gameoverModal();
                setTimeout(function()
                    {
                        $location.path( "/game" );
                    }
                    , 1000);
            }
                , 1000);

        }

        newProblem();

//clearObjects();

        $scope.navBack = function(){

            $location.path( "/game" );
        }

    }]);