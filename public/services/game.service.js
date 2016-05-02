'use strict';

angular.module('RadicalRatios.services.game', [
    ])

    .service('Game', [ '$q', '$http', function($q, $http) {

        function updateScore(sessionId, studentId, gameNumber, score) {
            var deferred = $q.defer();

            // var url = '/session/:id/student/:studentId/game/:gameId';
            var calloutUrl = '/session/' + sessionId + '/student/' + studentId + '/game/' + gameNumber;

            $http.post('/api' + calloutUrl, {score: score})
                .then(function(resp) {
                    deferred.resolve(resp);
                }, function(resp) {
                    deferred.reject(resp);
                });

            return deferred.promise;
        }

        function getGame(id) {
            var deferred = $q.defer();

            function returnGame() {
                angular.forEach(service.games, function(game) {
                    if (game && game._id == id) {
                        deferred.resolve(game);
                    }
                });
            }

            if (!service.games) {
                service.getGames().then(function() {
                    returnGame();
                }, function() {
                    deferred.reject(resp);
                });
            } else {
                returnGame();
            }

            return deferred.promise;
        }

        function getGames() {
            var deferred = $q.defer();

            $http.get('/api/games')
                .then(function(resp) {
                    service.games = resp.data;
                    console.log(resp.data);
                    deferred.resolve(resp.data);
                }, function(resp) {
                    deferred.reject(resp);
                });

            return deferred.promise;
        }

        var service = {
            games: [],
            updateScore: updateScore,
            getGames: getGames,
            getGame: getGame
        };

        return service;
    }]);
