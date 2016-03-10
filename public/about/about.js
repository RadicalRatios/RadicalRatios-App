'use strict';

angular.module('TrukSpot.about', ['ngRoute', 'TrukSpot.services'])

    .controller('AboutCtrl', ['$scope', 'EmailContact', function($scope, EmailContact) {

        $scope.submitEmail = function() {
            
            function displayFeedback() {
                Materialize.toast('We\'ll keep you in the loop!', 5000);
                $scope.email = '';
            }

            if($scope.email && $scope.email != '') {
                EmailContact.save({email: $scope.email}).$promise.then(displayFeedback,displayFeedback);
            }
        };

    }]);