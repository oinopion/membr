'use strict';

var membrControllers = angular.module('membrControllers', []);

membrControllers.controller('MemberListCtrl', ['$scope', '$location', 'Member',
    function ($scope, $location, Member) {
        $scope.members = Member.all();

        $scope.clearAll = function () {
            Member.clear();
        };
    }
]);

membrControllers.controller('MemberAddCtrl', ['$scope', '$location', 'Member',
    function ($scope, $location, Member) {
        $scope.name = "";
        $scope.note = "";

        $scope.addMember = function () {
            Member.add($scope.name, $scope.note);
            $location.path('');
        }
    }
]);

membrControllers.controller('MemberEditCtrl', ['$scope', '$location', '$routeParams', 'Member',
    function ($scope, $location, $routeParams, Member) {
        var member = Member.get($routeParams.memberId);
        $scope.memberId = member.id;
        $scope.name = member.name;
        $scope.note = member.note;

        $scope.doneEditing = function () {
            member.name = $scope.name;
            member.note = $scope.note;
            Member.saveState();
            $location.path('/' + member.id.toString());
        }
    }
]);

membrControllers.controller('MemberDetailCtrl', ['$scope', '$routeParams', 'Member',
    function ($scope, $routeParams, Member) {
        var member = Member.get($routeParams.memberId);
        $scope.member = member;
    }
]);

membrControllers.controller('MemberPaymentAddCtrl', ['$scope', '$routeParams', 'Member',
    function ($scope, $routeParams, Member) {
        var member = Member.get($routeParams.memberId);
        $scope.payment = 120;

        $scope.addPayment = function () {
            member.payments.p;
            Member.saveState();
            $location.path('/' + member.id.toString());
        }
    }
]);


