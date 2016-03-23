'use strict';

angular.module('RadicalRatios.navBar', ['ngRoute'])
    .directive('navBar', function() {
    return {
        scope: true,  // use a child scope that inherits from parent
        restrict: 'AE',
        replace: 'true',
        controller: 'navBarController',
        templateUrl: '/navbar/template/navbar.html'
        };
    })
    .controller('navBarController',['$scope', '$uibModal', function($scope, $uibModal){

    $scope.optionsModal = function(){
        var modalInstance = $uibModal.open({
            templateUrl: '/instructor/templates/instructor.html',
            controller: 'InstructorController',
            size: 'lg',
            resolve: {
                items: function () {
                    return $scope.items;
                }
            }
        });
    }

    }]);