'use strict';

angular.module('RadicalRatios.services.instructor', [
    ])

    .service('Instructor', [ '$q', function($q) {

        function createSession(name, email, password) {
            var deferred = $q.defer();

            // TODO: Make callout
            var text = "";
            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            for( var i=0; i < 5; i++ )
                text += possible.charAt(Math.floor(Math.random() * possible.length));

            deferred.resolve(text);

            return deferred.promise;
        }

        var service = {
            createSession: createSession
        };

        return service;
    }]);
