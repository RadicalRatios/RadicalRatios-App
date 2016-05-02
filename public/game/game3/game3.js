'use strict';

angular.module('RadicalRatios.game.game3', ['ngRoute'])

    .controller('Game3Controller',['$scope', '$location', '$uibModal', function($scope, $location, $uibModal){
        var GAME_CONST = 'Game3';
        $scope.name = "Game 3";

        addObject("newQuestion");
        $(document).ready(function(){
//var canvasElement = document.querySelector("#myCanvas");
            var canvas = document.getElementById("myCanvas2");
            var ctx = canvas.getContext("2d");

//Reset question Variables
            var reset = 0;
            var reset1 = 0;
            var reset2 = 0;
            var reset3 = 0;
            var reset4 = 0;
            var reset5 = 0;
            var reset6 = 0;
            var reset7 = 0;
            var reset8 = 0;
            var doneFlag = false;
//Question Ratio Randomizers
            var shuffleRatio = Math.floor(Math.random() * 8) + 2;
            var edgeRatio = Math.floor(Math.random() * 4) + 1;

//User Score variable
            var userScore = 0;

//Edge Variables
            var randomEdge1 = Math.floor(Math.random() * 10) + 2;
            var otherEdge = randomEdge1 + edgeRatio;
            var randomEdge4 = randomEdge1 * shuffleRatio;
            var answerEdge = otherEdge * shuffleRatio;

//Question Number and button selector
            var questionNum = 1;
            var quest = Math.floor(Math.random() * 4) + 1;

//Wrong Answers to fill in other button text
            var wrongAnswer1 = Math.floor(Math.random() * 30) + 1;
            var wrongAnswer2 = Math.floor(Math.random() * 30) + 1;
            var wrongAnswer3 = Math.floor(Math.random() * 30) + 1;
            var wrongAnswer4 = Math.floor(Math.random() * 30) + 1;

//Make sure the wrong answers aren't equal to each other
            if(wrongAnswer1 == wrongAnswer2 || wrongAnswer1 == wrongAnswer3){
                var wrongAnswer1 = Math.floor(Math.random() * 30) + 1;
            }
            else if(wrongAnswer2 == wrongAnswer3){
                var wrongAnswer2 = Math.floor(Math.random() * 30) + 1;
            }

            $scope.correctModal = function(){
                var correctModalInstance = $uibModal.open({
                    templateUrl: '/answer/templates/correct.html',
                    size: 'md'
                });
            }

            $scope.incorrectModal = function(){
                var incorrectModalInstance = $uibModal.open({
                    templateUrl: '/answer/templates/incorrectBubbles.html',
                    size: 'md',
                    controller: 'IncorrectController',
                    resolve: {
                        answer: function () {
                            return answerEdge;
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
                            return userScore;
                        },

                        gameNumber: function () {
                            return 3;
                        }
                    }
                });
            }


//Game Loop used to Show each Question 1-10
            function gameLoop(){

                if((questionNum >= 10) && (doneFlag==false)){
                    doneFlag = true;
                    setTimeout(endGame, 3000);
                }

                clearCanvas();
                if(questionNum == 1){
                    drawTriangle1();
                    drawText(randomEdge1, 50, 200, 20, "#FF0000");
                    //drawText(randomEdge1, 180, 350, 20, "#FF0000");
                    drawText(otherEdge, 220, 200, 20, "#FF0000");
                    drawTriangle2();
                    drawText(randomEdge4, 480, 200, 20, "#FF0000");
                    //drawText(randomEdge1, 590, 350, 20, "#FF0000");
                    drawText("x", 620, 200, 20, "#FF0000");
                }
                else if(questionNum == 2){
                    reset++;
                    if(reset == 1){
                        resetNumbers();
                    }
                    //resetNumbers();
                    drawTriangle3();
                    drawText(randomEdge1, 70, 200, 20, "#FF0000");
                    drawText(otherEdge, 220, 200, 20, "#FF0000");
                    drawTriangle2();
                    drawText(randomEdge4, 480, 200, 20, "#FF0000");
                    //drawText(randomEdge1, 590, 350, 20, "#FF0000");
                    drawText("x", 620, 200, 20, "#FF0000");
                }
                else if(questionNum == 3){
                    reset1++;
                    if(reset1 == 1){
                        resetNumbers();
                    }
                    drawRect(100, 100, 100, 100, "#FFA500");
                    drawText(randomEdge1, 80, 150, 20, "#FF0000");
                    drawText(otherEdge, 150, 220, 20, "#FF0000");
                    drawRect(500, 100, 200, 200, "#FF7F50");
                    drawText(randomEdge4, 480, 200, 20, "#FF0000");
                    drawText("x", 600, 320, 20, "#FF0000");
                }
                else if(questionNum == 4){
                    reset2++;
                    if(reset2 == 1){
                        resetNumbers();
                    }
                    drawTriangle1();
                    drawText(randomEdge4, 80, 200, 20, "#FF0000");
                    //drawText(randomEdge1, 590, 350, 20, "#FF0000");
                    drawText("x", 220, 200, 20, "#FF0000");
                    drawTriangle4();
                    drawText(randomEdge1, 480, 200, 20, "#FF0000");
                    drawText(otherEdge, 600, 200, 20, "#FF0000");

                }
                else if(questionNum == 5){
                    reset3++;
                    if(reset3 == 1){
                        resetNumbers();
                    }
                    drawTriangle1();
                    drawText(randomEdge1, 50, 200, 20, "#FF0000");
                    //drawText(randomEdge1, 180, 350, 20, "#FF0000");
                    drawText(otherEdge, 220, 200, 20, "#FF0000");
                    drawTriangle2();
                    drawText(randomEdge4, 480, 200, 20, "#FF0000");
                    //drawText(randomEdge1, 590, 350, 20, "#FF0000");
                    drawText("x", 620, 200, 20, "#FF0000");
                }
                else if(questionNum == 6){
                    reset4++;
                    if(reset4 == 1){
                        resetNumbers();
                    }
                    drawRect(500, 100, 100, 100, "#A52A2A");
                    drawText(randomEdge1, 480, 150, 20, "#FF0000");
                    drawText(otherEdge, 550, 220, 20, "#FF0000");
                    drawRect(100, 100, 200, 200, "#800000");
                    drawText(randomEdge4, 80, 200, 20, "#FF0000");
                    drawText("x", 200, 320, 20, "#FF0000");
                }
                else if(questionNum == 7){
                    reset5++;
                    if(reset5 == 1){
                        resetNumbers();
                    }
                    drawTriangle3();
                    drawText(randomEdge1, 70, 200, 20, "#FF0000");
                    drawText(otherEdge, 220, 200, 20, "#FF0000");
                    drawTriangle2();
                    drawText(randomEdge4, 480, 200, 20, "#FF0000");
                    //drawText(randomEdge1, 590, 350, 20, "#FF0000");
                    drawText("x", 620, 200, 20, "#FF0000");
                }
                else if(questionNum == 8){
                    reset6++;
                    if(reset6 == 1){
                        resetNumbers();
                    }
                    drawTriangle1();
                    drawText(randomEdge1, 50, 200, 20, "#FF0000");
                    //drawText(randomEdge1, 180, 350, 20, "#FF0000");
                    drawText(otherEdge, 220, 200, 20, "#FF0000");
                    drawTriangle2();
                    drawText(randomEdge4, 480, 200, 20, "#FF0000");
                    //drawText(randomEdge1, 590, 350, 20, "#FF0000");
                    drawText("x", 620, 200, 20, "#FF0000");
                }
                else if(questionNum == 9){
                    reset7++;
                    if(reset7 == 1){
                        resetNumbers();
                    }
                    drawRect(500, 100, 100, 100, "#808000");
                    drawText(randomEdge1, 480, 150, 20, "#FF0000");
                    drawText(otherEdge, 550, 220, 20, "#FF0000");
                    drawRect(100, 100, 200, 200, "#808000");
                    drawText(randomEdge4, 80, 200, 20, "#FF0000");
                    drawText("x", 200, 320, 20, "#FF0000");
                }
                else if(questionNum == 10){
                    reset8++;
                    if(reset8 == 1){
                        resetNumbers();
                    }
                    drawTriangle3();
                    drawText(randomEdge1, 70, 200, 20, "#FF0000");
                    drawText(otherEdge, 220, 200, 20, "#FF0000");
                    drawTriangle2();
                    drawText(randomEdge4, 480, 200, 20, "#FF0000");
                    //drawText(randomEdge1, 590, 350, 20, "#FF0000");
                    drawText("x", 620, 200, 20, "#FF0000");
                }


            }


//Give each button a number, with one button having the answer
            $("#answer1").text(wrongAnswer4);
            $("#answer2").text(wrongAnswer1);
            $("#answer3").text(wrongAnswer2);
            $("#answer4").text(wrongAnswer3);
            $("#answer" + quest).text(answerEdge);

//Use click functions on each button and determine if
//the button clicked is the correct answer
            $("#answer1").click(function() {
                var value1 = $(this).text();
                if(value1 == answerEdge){
                    userScore += 1;
                    questionNum++;
                    $scope.correctModal();
                    addObject("correctAnswer");
                    addObject("newQuestion");
                }
                else{
                    questionNum++;
                    $scope.incorrectModal();
                    addObject("wrongAnswer");
                    addObject("newQuestion");
                }
                //alert(value1);
            });

            $("#answer2").click(function() {
                var value2 = $(this).text();
                if(value2 == answerEdge){
                    userScore += 1;
                    questionNum++;
                    $scope.correctModal();
                    addObject("correctAnswer");
                    addObject("newQuestion");
                }
                else{
                    questionNum++;
                    $scope.incorrectModal();
                    addObject("wrongAnswer");
                    addObject("newQuestion");
                }
                //alert(value2);
            });

            $("#answer3").click(function() {
                var value3 = $(this).text();
                if(value3 == answerEdge){
                    userScore += 1;
                    questionNum++;
                    $scope.correctModal();
                    addObject("correctAnswer");
                    addObject("newQuestion");
                }
                else{
                    questionNum++;
                    $scope.incorrectModal();
                    addObject("wrongAnswer");
                    addObject("newQuestion");
                }
                //alert(value3);
            });

            $("#answer4").click(function() {
                var value4 = $(this).text();
                if(value4 == answerEdge){
                    userScore += 1;
                    questionNum++;
                    $scope.correctModal();
                    addObject("correctAnswer");
                    addObject("newQuestion");
                }
                else{
                    questionNum++;
                    $scope.incorrectModal();
                    addObject("wrongAnswer");
                    addObject("newQuestion");
                }
                //alert(value4);
            });


//-----------------Drawing Functions--------------------------
            function drawRect(x,y,w,h,col){
                ctx.fillStyle = col;
                ctx.fillRect(x,y,w,h);
            }

            function drawTriangle1(){
// the triangle
                ctx.beginPath();
                ctx.moveTo(100, 100);
                ctx.lineTo(100, 300);
                ctx.lineTo(300, 300);
                ctx.closePath();

// the outline
                ctx.lineWidth = 10;
                ctx.strokeStyle = '#666666';
                ctx.stroke();

// the fill color
                ctx.fillStyle = "#003300";
                ctx.fill();
            }

            function drawTriangle2(){
// the triangle
                ctx.beginPath();
                ctx.moveTo(500, 100);
                ctx.lineTo(500, 300);
                ctx.lineTo(700, 300);
                ctx.closePath();

// the outline
                ctx.lineWidth = 10;
                ctx.strokeStyle = '#666666';
                ctx.stroke();

// the fill color
                ctx.fillStyle = "#4B0082";
                ctx.fill();
            }

            function drawTriangle3(){
// the triangle
                ctx.beginPath();
                ctx.moveTo(100, 150);
                ctx.lineTo(200, 150);
                ctx.lineTo(150, 250);
                ctx.closePath();


// the outline
                ctx.lineWidth = 10;
                ctx.strokeStyle = '#666666';
                ctx.stroke();

// the fill color
                ctx.fillStyle = "#00FFFF";
                ctx.fill();
            }

            function drawTriangle4() {
                ctx.beginPath();
                ctx.moveTo(500, 150);
                ctx.lineTo(600, 150);
                ctx.lineTo(550, 250);
                ctx.closePath();


// the outline
                ctx.lineWidth = 10;
                ctx.strokeStyle = '#666666';
                ctx.stroke();

// the fill color
                ctx.fillStyle = "#00FF00";
                ctx.fill();
            }


            function drawText(num, x, y, size, col){
                ctx.font = 'bold '+size+'px Monospace';
                ctx.fillStyle = col;
                ctx.fillText(num, x, y);
                ctx.textAlign = 'center';
            }

            function clearCanvas(){
                ctx.clearRect(0, 0, canvas.width, canvas.height);
            }

            function resetNumbers(){
                shuffleRatio = Math.floor(Math.random() * 8) + 2;
                edgeRatio = Math.floor(Math.random() * 4) + 1;

                randomEdge1 = Math.floor(Math.random() * 10) + 2;
                otherEdge = randomEdge1 + edgeRatio;
                randomEdge4 = randomEdge1 * shuffleRatio;
                answerEdge = otherEdge * shuffleRatio;

                quest = Math.floor(Math.random() * 4) + 1;

                wrongAnswer1 = Math.floor(Math.random() * 30) + 1;
                wrongAnswer2 = Math.floor(Math.random() * 30) + 1;
                wrongAnswer3 = Math.floor(Math.random() * 30) + 1;
                wrongAnswer4 = Math.floor(Math.random() * 30) + 1;

                //Make sure the wrong answers aren't equal to each other
                if(wrongAnswer1 == wrongAnswer2 || wrongAnswer1 == wrongAnswer3){
                    var wrongAnswer1 = Math.floor(Math.random() * 30) + 1;
                }
                else if(wrongAnswer2 == wrongAnswer3){
                    var wrongAnswer2 = Math.floor(Math.random() * 30) + 1;
                }

                $("#answer1").text(wrongAnswer4);
                $("#answer2").text(wrongAnswer1);
                $("#answer3").text(wrongAnswer2);
                $("#answer4").text(wrongAnswer3);
                $("#answer" + quest).text(answerEdge);
            }
//--------------------------------------------------------------------------

            var startGame = setInterval(gameLoop, 30);

        });
        $scope.navBack = function(){
            $location.path( "/game" );
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

        function addObject(t){
            var x = document.createElement('div');

            if (t == "correctAnswer"){
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

    }]);