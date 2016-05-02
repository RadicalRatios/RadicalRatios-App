'use strict';

angular.module('RadicalRatios.services.student', [
    ])

    .service('Student', ['$q', '$http', function($q, $http) {

        // Student can have...
        // - _id
        // - name
        // - sessionKey
        // - games: [ { name: GameX, score: Number } ]
        var student = {};

        function joinSession(sessionKey, name) {
            var deferred = $q.defer();

            $http.post('/api/session/' + sessionKey + '/student', {name: name})
                .then(function(studentResp) {
                    console.log(studentResp);
                    service.student = studentResp.data;
                    deferred.resolve(studentResp.data);
                }, function(resp) {
                    console.log('error', resp);
                    deferred.reject(resp);
                });

            return deferred.promise;
        }

        var service = {
            student: student,
            joinSession: joinSession
        };

        return service;
    }]);
