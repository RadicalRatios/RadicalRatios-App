'use strict';

angular.module('RadicalRatios.game.game1', ['ngRoute'])

    .controller('Game1Controller',['$scope','$location', 'ngAudio', function($scope, $location, ngAudio){

        $scope.audio = ngAudio.load('sound/boopboop.wav');
        $scope.audio.volume = 1;

        var dividend;
        var divisor;
        var level = 1;
        var correct = 0;
        var questions = 0;
        var levelCount = 0;
        var ans = 0;

        function newProblem(){
            questions++;
            updateScore();
            dividend = level + Math.round((Math.random() * 2+correct/3));
            divisor  = Math.floor((Math.random() * 6)+1+level/2);

            var q = document.getElementById("question");

            q.innerHTML = "" + dividend + ":" + divisor;
            var q = document.getElementById("answer");
            q.innerHTML = "";

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

            var q = document.getElementById("answer");

            if (o1 == ans){
                q.innerHTML = "Correct!";
                correct++;
                levelCount++;
            }
            else
                q.innerHTML = "Incorrect (expected "+ans+")";
            disableButtons(true);
            //level up
            if (levelCount/2 >= level){
                level++;
                levelCount = 0;
            }
            if (questions >= 10)
                setTimeout(endGame, 3000);
            else
                setTimeout(newProblem, 3000);
        };

        document.getElementById("addButton").onclick = function(){
            var n = getObject1Value();
            if (n < 36)
                addObject("object1");
            $scope.audio.play();
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
            var m = gcm(dividend,divisor);
            var a =  dividend / m;
            var b =  divisor / m;

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

        function updateScore(){
            var q = document.getElementById("score");
            q.innerHTML = "question "+ questions + "/10";

        }
        newProblem();

//clearObjects();










        $scope.navBack = function(){
            $location.path( "/game" );
        }

    }]);