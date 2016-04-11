'use strict';

angular.module('RadicalRatios.services.game', [
    ])

    .service('Game', [ '$q', function($q) {

        function updateScore(studentId, game, score) {
            var deferred = $q.defer();

            // TODO:

            deferred.resolve();

            return deferred.promise;
        }

        function closeSession(sessionKey) {
            var deferred = $q.defer();

            // TODO:

            deferred.resolve(sessionKey);

            return deferred.promise;
        }

        var service = {
            updateScore: updateScore,
            closeSession: closeSession
        };

        return service;
    }]);
