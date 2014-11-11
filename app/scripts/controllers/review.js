'use strict';

/**
 * @ngdoc function
 * @name youTubeApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the youTubeApp
 */

var ReviewController = angular.module('youTubeApp');

ReviewController.controller('ReviewController', function($scope) {
    this.review = {};
    this.reviews = this.reviews || [];

    this.addReview = function(data){
        data.reviews = this.reviews;
        this.review.createdOn = Date.now();
        $scope.data.reviews.push(this.review);
        this.review = {};
    };
});