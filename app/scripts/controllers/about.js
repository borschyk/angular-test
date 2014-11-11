'use strict';

/**
 * @ngdoc function
 * @name youTubeApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the youTubeApp
 */

var AboutCtrl = angular.module('youTubeApp');

AboutCtrl.controller('AboutCtrl', function($scope, $routeParams, userService) {
    userService.then(function(data) {
        $scope.data = data.data.feed.entry[$routeParams.videoId];
        $scope.getIframeSrc = function(src) {
          console.log(src);
          return '//www.youtube.com/embed/' + src;
        };
    });
});
