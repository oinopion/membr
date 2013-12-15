'use strict';

var membrApp = angular.module('membrApp', [
    'ngRoute',
    'ngTouch',
    'membrServices',
    'membrControllers',
]);

membrApp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'static/partials/member-list.html',
            controller: 'MemberListCtrl'
        });
        $routeProvider.when('/add', {
            templateUrl: 'static/partials/member-add.html',
            controller: 'MemberAddCtrl'
        });
        $routeProvider.when('/:memberId', {
            templateUrl: 'static/partials/member-detail.html',
            controller: 'MemberDetailCtrl'
        });
        $routeProvider.when('/:memberId/edit', {
            templateUrl: 'static/partials/member-edit.html',
            controller: 'MemberEditCtrl'
        });
        $routeProvider.otherwise({
            redirectTo: '/'
        });
    }
]);
