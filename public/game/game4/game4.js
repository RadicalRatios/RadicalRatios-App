'use strict';

angular.module('RadicalRatios.game.game4', ['ngRoute', 'Quintus'])

    .controller('Game4Controller',[ '$window', '$scope', '$location','$uibModal', function($window, $scope, $location, $uibModal) {


        var value;
        var max = 444;
        var availQuarters = -1;
        var availDimes = -1;
        var availNickels = -1;
        var availPennies = -1;
        var level = 1;
        var score = 0;
        var round = 0;
        var pennies;
        var nickels;
        var dimes;
        var quarters;
        var coinmax = 13;
        var subOpt = "";


        $scope.correctModal = function(){
            var correctModalInstance = $uibModal.open({
                templateUrl: '/answer/templates/correct.html',
                size: 'md'
            });
        }

        $scope.incorrectModal = function(){
            var incorrectModalInstance = $uibModal.open({
                templateUrl: '/answer/templates/incorrectCoins.html',
                size: 'md',
                controller: 'IncorrectController',
                resolve: {
                    answer: function () {
                        return value/100;
                    }
                }
            });
        }

        $scope.subOptimalModal = function(){
            var incorrectModalInstance = $uibModal.open({
                templateUrl: '/answer/templates/subOptCoins.html',
                size: 'md',
                controller: 'IncorrectController',
                resolve: {
                    answer: function () {
                        return subOpt;
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
                        return score;
                    },

                    gameNumber: function () {
                        return 4;
                    }
                }
            });
        }


        function requestQuarters(q){
            if (availQuarters >= 0)
                availQuarters = q + Math.round((Math.random() * 4) + 2);

            value += 25*q;
            if (value > max)
                value = max;
        }

        function requestDimes(q){
            if (availDimes >= 0)
                availDimes = q + Math.round((Math.random() * 4) + 2);;

            value += 10*q;
            if (value > max)
                value = max;
        }

        function requestNickels(q){
            if (availNickels >= 0)
                availNickels = q + Math.round((Math.random() * 4) + 2);;

            value += 5*q;
            if (value > max)
                value = max;
        }

        function requestPennies(q){
            if (availPennies >= 0)
                availPennies = q + Math.round((Math.random() * 4) + 2);;
            value += q;
            if (value > max)
                value = max;
        }

//this enables all buttons
        function resetButtons(){
            $("#pennyAddBtn").prop("disabled",false);
            $("#pennySubBtn").prop("disabled",false);

            $("#nickelAddBtn").prop("disabled",false);
            $("#nickelSubBtn").prop("disabled",false);

            $("#dimeAddBtn").prop("disabled",false);
            $("#dimeSubBtn").prop("disabled",false);

            $("#quarterAddBtn").prop("disabled",false);
            $("#quarterSubBtn").prop("disabled",false);

        }

        function newProblem(){
            value = 0;
            round++;
            resetCoins();
            resetButtons();
            if (level < 4){
                for (var i = 0; i < level; i++){
                    var r = Math.round(Math.random() * 4);
                    var a;
                    if (r == 0){
                        a = Math.round(Math.random() * 3 +1);
                        requestPennies(a);
                    }
                    else if (r == 1){
                        a = 1;
                        requestNickels(a);
                    }
                    else if (r == 2){
                        a = Math.round(Math.random() * 1 +1);
                        requestDimes(a);
                    }
                    else {
                        a = Math.round(Math.random() * 3 +1);
                        requestQuarters(a);
                    }
                }
            }
            else {
                var r2 = Math.round(Math.random() * 2 +1);

                if (r2 == 1){
                    availNickels = 0;
                    $("#nickelAddBtn").prop("disabled",true);
                    $("#nickelSubBtn").prop("disabled",true);
                }
                else if (r2 == 2){
                    availDimes = 0;
                    $("#dimeAddBtn").prop("disabled",true);
                    $("#dimeSubBtn").prop("disabled",true);
                }
                else if (r2 == 3){
                    availQuarters = 0;
                    $("#quarterAddBtn").prop("disabled",true);
                    $("#quarterSubBtn").prop("disabled",true);
                }
                var a;

                a = Math.floor(Math.random() * 3 + 1);
                requestPennies(a);

                if (r2 != 1){
                    a = Math.round(Math.random() * 8 + 2);
                    requestNickels(a);
                }
                if (r2 != 2){
                    a = Math.round(Math.random() * 4 + 2);
                    requestDimes(a);
                }
                if (r2 != 3){
                    a = Math.round(Math.random() * 3);
                    requestQuarters(a);
                }
            }
            showAmount();
            addObject("newQuestion");
        }

        function showAmount(){
            $("#amt").html(toDollar(value));
        }

//this converts an amount into a dollar representation
        function toDollar(amt){
            var h = Math.floor((amt%10));
            var t = Math.floor((amt%100)/10);
            var d = Math.floor(amt/100);

            return "$"+d+"."+(t)+(h);
        }

        function resetCoins(){
            var p = $("#pennyDiv .coins");
            if(p.length > 0){
                p.remove();
            }
            var pf = $("#pennyDiv .fakeCoin");
            if (pf.length <= 0){
                var div = $('<div class="fakeCoin" id="penny"></div>');
                $("#pennyDiv .buttons").prepend(div);
            }

            var p = $("#nickelDiv .coins");
            if(p.length > 0){
                p.remove();
            }
            var pf = $("#nickelDiv .fakeCoin");
            if (pf.length <= 0){
                var div = $('<div class="fakeCoin" id="nickel"></div>');
                $("#nickelDiv .buttons").prepend(div);
            }

            var p = $("#dimeDiv .coins");
            if(p.length > 0){
                p.remove();
            }
            var pf = $("#dimeDiv .fakeCoin");
            if (pf.length <= 0){
                var div = $('<div class="fakeCoin" id="dime"></div>');
                $("#dimeDiv .buttons").prepend(div);
            }

            var p = $("#quarterDiv .coins");
            if(p.length > 0){
                p.remove();
            }
            var pf = $("#quarterDiv .fakeCoin");
            if (pf.length <= 0){
                var div = $('<div class="fakeCoin" id="quarter"></div>');
                $("#quarterDiv .buttons").prepend(div);
            }
            availQuarters = -1;
            availDimes = -1;
            availNickels = -1;
            availPennies = -1;
            pennies = 0;
            nickels = 0;
            dimes = 0;
            quarters = 0;

        }

        function addPenny(){
            if (availPennies != 0 && pennies < coinmax){
                pennies++;
                var div = $('<div class="coins" id="penny"></div>');
                $("#pennyDiv .buttons").prepend(div);
                $("#pennyDiv .fakeCoin").remove();
            }
        }


        function subPenny(){
            var c = $("#pennyDiv .coins");

            if (c.length > 0){
                pennies--;
                if (availPennies>-1)
                    availPennies++;
                if (c.length == 1){
                    var div = $('<div class="fakeCoin" id="penny"></div>');
                    $("#pennyDiv .buttons").prepend(div);
                }
                c[c.length-1].remove();
            }
        }


        function addNickel(){
            if (availNickels != 0 && nickels < coinmax){
                nickels++;
                var div = $('<div class="coins" id="nickel"></div>');
                $("#nickelDiv .buttons").prepend(div);
                $("#nickelDiv .fakeCoin").remove();
            }
        }

        function subNickel(){
            var c = $("#nickelDiv .coins");

            if (c.length > 0){
                nickels--;
                if (availNickels>-1)
                    availNickels++;
                if (c.length == 1){
                    var div = $('<div class="fakeCoin" id="nickel"></div>');
                    $("#nickelDiv .buttons").prepend(div);
                }
                c[c.length-1].remove();
            }
        }

        function addDime(){
            if (availDimes != 0 && dimes < coinmax){
                dimes++;
                var div = $('<div class="coins" id="dime"></div>');
                $("#dimeDiv .buttons").prepend(div);
                $("#dimeDiv .fakeCoin").remove();
            }
        }

        function subDime(){
            var c = $("#dimeDiv .coins");

            if (c.length > 0){
                dimes--;
                if (availDimes>-1)
                    availDimes++;
                if (c.length == 1){
                    var div = $('<div class="fakeCoin" id="dime"></div>');
                    $("#dimeDiv .buttons").prepend(div);
                }
                c[c.length-1].remove();
            }
        }

        function addQuarter(){
            if (availQuarters != 0 && quarters < coinmax){
                quarters++;
                var div = $('<div class="coins" id="quarter"></div>');
                $("#quarterDiv .buttons").prepend(div);
                $("#quarterDiv .fakeCoin").remove();
            }
        }

        function subQuarter(){
            var c = $("#quarterDiv .coins");

            if (c.length > 0){
                quarters--;
                if (availQuarters>-1)
                    availQuarters++;
                if (c.length == 1){
                    var div = $('<div class="fakeCoin" id="quarter"></div>');
                    $("#quarterDiv .buttons").prepend(div);
                }
                c[c.length-1].remove();
            }
        }


//main program
        $(document).ready(function(){
            $("#pennyAddBtn").on("click", addPenny);
            $("#pennySubBtn").on("click", subPenny);

            $("#nickelAddBtn").on("click", addNickel);
            $("#nickelSubBtn").on("click", subNickel);

            $("#dimeAddBtn").on("click", addDime);
            $("#dimeSubBtn").on("click", subDime);

            $("#quarterAddBtn").on("click", addQuarter);
            $("#quarterSubBtn").on("click", subQuarter);

//submit answer
            $("#submit").on("click", function(){
                var answer = pennies + nickels*5 + dimes*10 +quarters*25;
//alert("a: "+answer+"v: "+value);
                if (answer == value){
                    var v = value;
                    var q = 0;
                    var d = 0;
                    var n = 0;
                    var p = 0;

                    while(v >= 25 && availQuarters != 0){
                        q++;
                        v-=25;
                    }
                    while(v >= 10 && availDimes != 0){
                        d++;
                        v-=10;
                    }
                    while(v >= 5 && availNickels != 0){
                        n++;
                        v-=5;
                    }
                    while(v >= 1 && availPennies != 0){
                        p++;
                        v-=1;
                    }
                    if (q == quarters && d == dimes && n == nickels && p == pennies){
                        $scope.correctModal();
                        addObject("correctAnswer");
                        score += 1;
                    }
                    else{
                        subOpt = "Almost correct, however...\n Expected "+q+" quarters, "+d+" dimes, "+n+" nickels, "+p+" pennies";
                        $scope.subOptimalModal();
                        addObject("subOptimalAnswer");
                        score += 0.5;
                    }
                }
                else{
                    $scope.incorrectModal();
                    addObject("wrongAnswer");
                }
                if (score >= 5)
                    level = 4;
                else if (score >= 3)
                    level = 3;
                else if (score > 0)
                    level = 2;

//end of game
                if (round >= 10) {
                    setTimeout(endGame, 2000);
                }
                else {
                    newProblem();
                }
            });

            newProblem();
        });

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
            else if (t == "subOptimalAnswer"){
                var bar = document.getElementById("progressBar")
                bar.removeChild(bar.lastChild)
                x.className="progress-bar progress-bar-warning";
                var y = document.createElement('span');
                y.className="glyphicon glyphicon-minus-sign";
                x.appendChild(y);
                bar.appendChild(x);
            }
            else if (t == "newQuestion"){
                var bar = document.getElementById("progressBar")
                x.className="progress-bar progress-bar-striped progress-bar-info active ";
                bar.appendChild(x);
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
        $scope.navBack = function(){
            $location.path( "/game" );
        };

    }]);













