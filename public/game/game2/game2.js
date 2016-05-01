'use strict';

angular.module('RadicalRatios.game.game2', ['ngRoute'])

    .controller('Game2Controller',['$scope','$location', function($scope, $location){
        var GAME_CONST = 'Game2';

        $scope.name = 'Game 2';

        $scope.navBack = function(){
            $location.path( "/game" );
        }


            var myCanvas = document.getElementById("myCanvas");
            //document.getElementById("myCanvas").style.backgroundColor = '#ADD8E6';
            var pipeContext = myCanvas.getContext("2d");
            var ctx = myCanvas.getContext("2d");



        /*
         var sound = new Audio("Pop.wav");
         sound.preload = 'auto';
         sound.load();

         function playSound(volume){
         var click = sound.cloneNode();
         click.volume = volume;
         click.play();
         }*/



//----------------------------------Set the variables-------------------------------------
        var bubblesArray = [];
        var dynamic = 700;
        var dynamic2 = 700;
        var count = 0;
        var movement = 0;

        var question = "null";
        var answer = 0;
        var userScore = 0;

        var x = 0;
        var y = 0;
        var x1 = 2;
        var z = 4;
        var y1 = 8;
//-----------------------------------------------------------------------------------------





//------------------------------Question Box Object-------------------------------------
        var qB = {
            x:300,
            y:400,
            width:200,
            height:50,
            color:"#D2B48C",
        };

//-------------------------------Bubble Objects-----------------------------------------
        var bubble = {
            color:"rgba(255, 255, 255, 0.5)",
            radius:20,
            x:360,
            y:700,
            num: 0,
            speed: 700,
        };

        var bubble1 = {
            color:"rgba(255, 255, 255, 0.5)",
            radius:20,
            x:300,
            y:750,
            num: 1,
            speed: 700,
        };

        var bubble2 = {
            color:"rgba(255, 255, 255, 0.5)",
            radius:20,
            x:240,
            y:790,
            num: 2,
            speed: 700,
        };

        var bubble3 = {
            color:"rgba(255, 255, 255, 0.5)",
            radius:20,
            x:180,
            y:840,
            num: 4,
            speed: 700,
        };

        var bubble4 = {
            color:"rgba(255, 255, 255, 0.5)",
            radius:20,
            x:120,
            y:890,
            num: 5,
            speed: 700,
        };

        var bubble5 = {
            color:"rgba(255, 255, 255, 0.5)",
            radius:20,
            x:60,
            y:950,
            num: 8,
            speed: 700,
        };
//-------------------------------------------------------------------------------


//----------------------------Drawing Functions----------------------------------
//Draw the Bubble
        function drawCircle(x,y,r,col){
            ctx.fillStyle = col;
            ctx.beginPath();
            ctx.arc(x + 5, y + 5, r, 0,  Math.PI * 2, true);
            ctx.closePath();
            ctx.fill();
        }

//Draw the Number Text
        function drawText(num, x, y, size, col){
            ctx.font = 'bold '+size+'px Monospace';
            ctx.fillStyle = col;
            ctx.fillText(num, x, y);
            ctx.textAlign = 'center';
        }

//Clear the canvas
        function clear() {
            ctx.clearRect(0,0,myCanvas.width,myCanvas.height);
        }
//-----------------------------------------------------------------------------------


//---------------------------------Game Loop-------------------------------------------
        function gameLoop() {
            clear();
            drawText("User Score: " + userScore, 100, 30, 20, "#FF0000");
            setSpeed();
            generateAnswer();
            //setQuestionBox();

            //update speeds
            bubble.y = bubble.speed;
            bubble1.y = bubble1.speed;
            bubble2.y = bubble2.speed;
            bubble3.y = bubble3.speed;
            bubble4.y = bubble4.speed;
            bubble5.y = bubble5.speed;

            //draw each bubble with their assigned number
            drawCircle(bubble.x, bubble.y, bubble.radius, bubble.color);
            drawText(bubble.num, bubble.x + 5, bubble.y + 10, 20, "#FF0000");
            drawCircle(bubble1.x, bubble1.y, bubble1.radius, bubble1.color);
            drawText(bubble1.num, bubble1.x + 5, bubble1.y + 10, 20, "#FF0000");
            drawCircle(bubble2.x, bubble2.y, bubble2.radius, bubble2.color);
            drawText(bubble2.num, bubble2.x + 5, bubble2.y + 10, 20, "#FF0000");
            drawCircle(bubble3.x, bubble3.y, bubble3.radius, bubble3.color);
            drawText(bubble3.num, bubble3.x + 5, bubble3.y + 10, 20, "#FF0000");
            drawCircle(bubble4.x, bubble4.y, bubble4.radius, bubble4.color);
            drawText(bubble4.num, bubble4.x + 5, bubble4.y + 10, 20, "#FF0000");
            drawCircle(bubble5.x, bubble5.y, bubble5.radius, bubble5.color);
            drawText(bubble5.num, bubble5.x + 5, bubble5.y + 10, 20, "#FF0000");

            setQuestionBox();

            //if any bubble goes off screen, redraw it at the bottom
            if(bubble.y < -20 || bubble.x > 800 || bubble.x < 0){
                bubble.speed = 700;
                bubble.x = Math.floor(Math.random() * 740) + 60;
                bubble.num = answer;
                movement = bubble.x;
            }
            else if(bubble1.y < -20 || bubble1.x > 800 || bubble1.x < 0){
                bubble1.speed = 750;
                bubble1.x = Math.floor(Math.random() * 740) + 60;
                bubble1.num = Math.floor(Math.random() * 20);
                movement = bubble1.x;
            }
            else if(bubble2.y < -20 || bubble2.x > 800 || bubble2.x < 0){
                bubble2.speed = 790;
                bubble2.x = Math.floor(Math.random() * 740) + 60;
                bubble2.num = Math.floor(Math.random() * 20);
                movement = bubble2.x;
            }
            else if(bubble3.y < -20 || bubble3.x > 800 || bubble3.x < 0){
                bubble3.speed = 920;
                bubble3.x = Math.floor(Math.random() * 740) + 60;
                bubble3.num = Math.floor(Math.random() * 20);
                movement = bubble3.x;
            }
            else if(bubble4.y < -20 || bubble4.x > 800 || bubble4.x < 0){
                bubble4.speed = 820;
                bubble4.x = Math.floor(Math.random() * 740) + 60;
                bubble4.num = Math.floor(Math.random() * 20);
                movement = bubble4.x;
            }
            else if(bubble5.y < -20 || bubble5.x > 800 || bubble5.x < 0){
                bubble5.speed = 870;
                bubble5.x = Math.floor(Math.random() * 740) + 60;
                bubble5.num = Math.floor(Math.random() * 20);
                movement = bubble5.x;
            }

            //if user clicks, check to see if correct bubble is clicked
            window.onmousedown = function(e){
                x = e.pageX - myCanvas.getBoundingClientRect().left;
                y = e.pageY - myCanvas.getBoundingClientRect().top;

                //determine the center of each bubble (x,y)
                var dx = x - bubble.x,
                    dy = y - bubble.y,
                    dist = Math.sqrt(dx * dx + dy * dy);

                var dx1 = x - bubble1.x,
                    dy1 = y - bubble1.y,
                    dist1 = Math.sqrt(dx1 * dx1 + dy1 * dy1);

                var dx2 = x - bubble2.x,
                    dy2 = y - bubble2.y,
                    dist2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);

                var dx3 = x - bubble3.x,
                    dy3 = y - bubble3.y,
                    dist3 = Math.sqrt(dx3 * dx3 + dy3 * dy3);

                var dx4 = x - bubble4.x,
                    dy4 = y - bubble4.y,
                    dist4 = Math.sqrt(dx4 * dx4 + dy4 * dy4);

                var dx5 = x - bubble5.x,
                    dy5 = y - bubble5.y,
                    dist5 = Math.sqrt(dx5 * dx5 + dy5 * dy5);

                //determine the answer when the bubble is clicked. IF correct +10, if not -10
                //also resets the bubble location and assigns it a new number
                //bubble is always assigned the answer while the others are assigned random values
                //the random values could also be the answer so must check to make sure
                if (dist < bubble.radius) {
                    //playSound(sound);
                    if(bubble.num == answer){
                        userScore += 10;
                        generateRandomNumbers();
                        bubble.speed = 700;
                        bubble.x = Math.floor(Math.random() * 800);
                        bubble.num = answer;
                        // setBubbleValues(bubble1, 750);
                    }
                    else{
                        userScore -= 10;
                        checkNegativeScore();
                        generateRandomNumbers();
                        bubble.speed = 700;
                        bubble.x = Math.floor(Math.random() * 800);
                        bubble.num = answer;
                        // setBubbleValues(bubble1, 750);
                    }
                    // userScore += 10;
                    // generateRandomNumbers();
                    // bubble.speed = 700;
                    // bubble.x = Math.floor(Math.random() * 800);
                    // bubble.num = answer;
                    // movement = bubble.x;
                }
                else if(dist1 < bubble1.radius){
                    if(bubble1.num == answer){
                        userScore += 10;
                        generateRandomNumbers();
                        setBubbleValues(bubble1, 750);
                    }
                    else{
                        userScore -= 10;
                        checkNegativeScore();
                        generateRandomNumbers();
                        setBubbleValues(bubble1, 750);
                    }
                }
                else if(dist2 < bubble2.radius){
                    if(bubble2.num == answer){
                        userScore += 10;
                        generateRandomNumbers();
                        setBubbleValues(bubble2, 790);
                    }
                    else{
                        userScore -= 10;
                        checkNegativeScore();
                        generateRandomNumbers();
                        setBubbleValues(bubble2, 790);
                    }
                }
                else if(dist3 < bubble3.radius){
                    if(bubble3.num == answer){
                        userScore += 10;
                        generateRandomNumbers();
                        setBubbleValues(bubble3, 820);
                    }
                    else{
                        userScore -= 10;
                        checkNegativeScore();
                        generateRandomNumbers();
                        setBubbleValues(bubble3, 820);
                    }
                }
                else if(dist4 < bubble4.radius){
                    if(bubble4.num == answer){
                        userScore += 10;
                        generateRandomNumbers();
                        setBubbleValues(bubble4, 880);
                    }
                    else{
                        userScore -= 10;
                        checkNegativeScore();
                        generateRandomNumbers();
                        setBubbleValues(bubble4, 880);
                    }
                }
                else if(dist5 < bubble5.radius){
                    if(bubble5.num == answer){
                        userScore += 10;
                        generateRandomNumbers();
                        setBubbleValues(bubble5, 940);
                    }
                    else{
                        userScore -= 10;
                        checkNegativeScore();
                        generateRandomNumbers();
                        setBubbleValues(bubble5, 940);
                    }
                }

            }

        }

//---------------------------------------------------------------------------------------



//Helper Functions
        function setSpeed(){
            bubble.speed = bubble.speed - 1.5;
            bubble1.speed = bubble1.speed - 1.5;
            bubble2.speed = bubble2.speed - 1.5;
            bubble3.speed = bubble3.speed - 1.5;
            bubble4.speed = bubble4.speed - 1.5;
            bubble5.speed = bubble5.speed - 1.5;
        }

        function setBubbleValues(bubble, s){
            bubble.speed = s;
            bubble.x = Math.floor(Math.random() * 740) + 60;
            bubble.num = Math.floor(Math.random() * 20);
            movement = bubble.x + 200;
        }


        function drawRect(x,y,w,h,col){
            ctx.fillStyle = col;
            ctx.fillRect(x,y,w,h);
        }

        function setQuestionBox(){
            drawRect(qB.x, qB.y, qB.width, qB.height, qB.color);
            generateQuestion();
        }

        function generateQuestion(){
            question = "x/" + x1 + " = " + z + "/" + y1;
            drawText(question, qB.x + 100, qB.y + 25, 20, "#FF0000");
        }

        function generateAnswer(){
            answer = (x1 * z) / (y1);
            if(answer % 1 != 0){
                generateRandomNumbers();
                answer = (x1 * z) / (y1);
            }
        }

        function generateRandomNumbers() {
            x1 = Math.floor(Math.random() * 20) + 1;
            z = Math.floor(Math.random() * 20) + 1;
            y1 = Math.floor(Math.random() * 20) + 1;
        }

        function checkNegativeScore(){
            if(userScore < 0){
                userScore = 0;
            }
        }

//start the game
        var updatePipes = setInterval(gameLoop,30);

    }]);