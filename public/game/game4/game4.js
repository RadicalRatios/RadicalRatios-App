'use strict';

angular.module('RadicalRatios.game.game4', ['ngRoute', 'Quintus'])

    .controller('Game4Controller',[ '$window', '$scope', '$location', function($window, $scope, $location) {
        var GAME_CONST = 'Game4';
        $scope.name = 'Game4';

        $scope.$on("$destroy", function(){
            if (Q) {
                Q.clearStages();
            }
        });

        $scope.init = function() {

            console.log('window load');
            // Set up a standard Quintus instance with only the
            // Sprites and Scene module (for the stage support) loaded.
            var Q = $window.Q = Quintus().include("Sprites, Scenes, 2D, Input")
                .setup({ width: 800, height: 400 });

            // Draw vertical lines at every 100 pixels for visual indicators

            // Create a simple scene that adds two shapes on the page
            Q.scene("start",function(stage) {

                // A basic sprite shape a asset as the image
                var sprite1 = new Q.Sprite({ x: 500, y: 100, asset: '/images/enemy.png',
                    angle: 0, collisionMask: 1, scale: 1});
                sprite1.p.points = [
                    [ -150, -120 ],
                    [  150, -120 ],
                    [  150,   60 ],
                    [   90,  120 ],
                    [  -90,  120 ],
                    [ -150,   60 ]
                ];
                stage.insert(sprite1);
                // Add the 2D component for collision detection and gravity.
                sprite1.add('2d')

                sprite1.on('step',function() {

                });

                // A red platform for the other sprite to land on
                var sprite2 = new Q.Sprite({ x: 400, y: 300, w: 600, h: 50 });
                sprite2.draw= function(ctx) {
                    ctx.fillStyle = '#FF0000';
                    ctx.fillRect(-this.p.cx,-this.p.cy,this.p.w,this.p.h);
                };
                stage.insert(sprite2);

                var sprite3 = new Q.Sprite({ x: 600, y: 200, w: 100, h: 100 });
                sprite3.draw= function(ctx) {
                    ctx.fillStyle = '#FF0000';
                    ctx.fillRect(-this.p.cx,-this.p.cy,this.p.w,this.p.h);
                };
                stage.insert(sprite3);

                // Bind the basic inputs to different behaviors of sprite1
                Q.input.on('up',stage,function(e) {
                    sprite1.p.scale -= 0.1;
                });

                Q.input.on('down',stage,function(e) {
                    sprite1.p.scale += 0.1;
                });

                Q.input.on('left',stage,function(e) {
                    sprite1.p.vx += -70;
                });

                Q.input.on('right',stage,function(e) {
                    sprite1.p.vx += 70;
                });

                Q.input.on('fire',stage,function(e) {
                    sprite1.p.vy = -600;
                });

                Q.input.on('action',stage,function(e) {
                    sprite1.p.x = 500;
                    sprite1.p.y = 100;
                });

                Q.input.on('space',stage,function(e) {
                    sprite1.p.x = 500;
                    sprite1.p.y = 100;
                });

            });

            Q.load('/images/enemy.png',function() {

                // Start the show
                Q.stageScene("start");

                // Turn visual debugging on to see the
                // bounding boxes and collision shapes
                Q.debug = false;

                // Turn on default keyboard controls
                Q.input.keyboardControls();
            });


        };

        $scope.clearStages = function(){
            Q.clearStages();
        };

        $scope.navBack = function(){
            $location.path( "/game" );
        };

    }]);













