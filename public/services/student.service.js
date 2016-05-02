'use strict';

angular.module('RadicalRatios.services.student', [
    ])

    .service('Student', ['$q', '$http', function($q, $http) {

        // Student can have...
        // - id
        // - name
        // - scores: [ { game: Game, score: Number } ]
        var student = {};

        function joinSession(sessionKey, name) {
            var deferred = $q.defer();

            $http.post('/api/session/:id/student', {name: name, session: sessionKey})
                .then(function(studentResp) {
                    service.student = studentResp.data;
                    deferred.resolve(studentResp.data);
                }, function(resp) {
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
