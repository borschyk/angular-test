'use strict';

/**
 * @ngdoc overview
 * @name youTubeApp
 * @description
 * # youTubeApp
 *
 * Main module of the application.
 */

var youTubeApp = angular.module('youTubeApp', ['ngResource', 'ngRoute']);

youTubeApp.service('userService', [ '$http', function($http){
    return $http
        .get('//gdata.youtube.com/feeds/api/standardfeeds/most_popular?v=2&alt=json')
        .success(function (data) {
            console.log(data.feed);
            return data.feed.entry;
        });
}]);

youTubeApp.config(function ($routeProvider, $sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist([
        'self',
        'https://www.youtube.com/v/**',
        'http://www.youtube.com/v/**'
    ]);

    $routeProvider.when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
    }).when('/about/:videoId/', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
    }).when('/404', {
        templateUrl: 'views/404.html'
    }).otherwise({
        redirectTo: '/404'
    });
});
