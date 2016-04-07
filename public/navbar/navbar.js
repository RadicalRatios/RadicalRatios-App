'use strict';

angular.module('RadicalRatios.navBar', ['ngRoute', 'ngAudio'])
    .directive('navBar', function() {
    return {
        scope: true,  // use a child scope that inherits from parent
        restrict: 'AE',
        replace: 'true',
        controller: 'navBarController',
        templateUrl: '/navbar/template/navbar.html'
        };
    })
    .controller('navBarController',['$scope', '$uibModal', 'ngAudio', function($scope, $uibModal, ngAudio){

        $scope.audio = ngAudio.load('sound/SleepAway.mp3');
        $scope.audio.volume = 0;
        $scope.audio.loop = true;

        $scope.optionsModal = function(){
            var modalInstance = $uibModal.open({
                templateUrl: '/instructor/templates/instructor.html',
                controller: 'InstructorController',
                size: 'md',
                resolve: {
                    items: function () {
                        return $scope.items;
                    }
                }
            });
        }

    }]);