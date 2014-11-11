'use strict';

/**
 * @ngdoc function
 * @name youTubeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the youTubeApp
 */

var MainCtrl = angular.module('youTubeApp');

MainCtrl.controller('MainCtrl', function ($scope, userService) {
    userService.then(function(data) {
        $scope.data = data.data.feed;
    });
});