'use strict';

angular.module('RadicalRatios.services.instructor', [
    ])

    .service('Instructor', [ '$q', '$http', function($q, $http) {

        function createSession(name, email, password) {
            var deferred = $q.defer();

            $http.post('/api/session', {name: name, email: email, password: password})
                .then(function(resp) {
                    deferred.resolve(resp);
                }, function(resp) {
                    deferred.reject(resp);
                });

            return deferred.promise;
        }

        function closeSession(sessionKey) {
            var deferred = $q.defer();

            $http.delete('/api/session/' + sessionKey, {})
                .then(function(resp) {
                    deferred.resolve(resp);
                }, function(resp) {
                    deferred.reject(resp);
                });

            return deferred.promise;
        }

        var service = {
            createSession: createSession,
            closeSession: closeSession
        };

        return service;
    }]);
