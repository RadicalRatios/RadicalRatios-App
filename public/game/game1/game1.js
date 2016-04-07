'use strict';

angular.module('RadicalRatios.game.game1', ['ngRoute'])

    .controller('Game1Controller',['$scope','$location', 'ngAudio', function($scope, $location, ngAudio){

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
        $scope.ansMessage;
        $scope.messageType = "success"
        $scope.displayMode = "none";

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
        }

        function addObject(t){
            var x = document.createElement('div');

            x.className=t;
            if (t == "object1")
                document.getElementById("object1Div").appendChild(x);
            else
                document.getElementById("object2Div").appendChild(x);


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
                $scope.displayMode = "";
                $scope.ansMessage = "Correct!";
                $scope.messageType = "success"
                correct++;
                levelCount++;
            }
            else {
                $scope.displayMode = "";
                $scope.ansMessage = "Incorrect (expected " + ans + ")";
                $scope.messageType = "danger"

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
                setTimeout(newProblem, 3000);
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
                    x.removeChild(x.firstChild);
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
            alert("Thanks for playing. You got " + correct + "/10 questions correct. Please submit your score.");
        }

        newProblem();

//clearObjects();










        $scope.navBack = function(){
            $location.path( "/game" );
        }

    }]);