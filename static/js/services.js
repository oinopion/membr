'use strict';

var membrServices = angular.module('membrServices', []);

membrServices.factory('Member', ['$rootScope',
    function ($rootScope) {
        var service = {
            initialized: false,
            stateStore: 'members',
            members: [],

            loadState: function () {
                if (service.initialized) {
                    return;
                }
                service.initialized = true;
                var stateJson = window.localStorage[service.stateStore];
                var members = angular.fromJson(stateJson);
                if (jQuery.isArray(members)) {
                    service.members = members;
                    console.log('Loaded application state');
                } else {
                    service.members = [];
                    console.log('Application state reset');
                }
            },
            saveState: function () {
                if (!service.initialized) {
                    return;
                }
                console.log('Saving application state');
                var stateJson = angular.toJson(service.members);
                window.localStorage[service.stateStore] = stateJson;
            },

            clear: function () {
                service.members.length = 0;
            },

            all: function () {
                return service.members;
            },

            get: function (id) {
                var member = service.members[id];
                if (!member.payments) {
                    member.payments = [];
                }
                return  member;
            },

            add: function (name, note) {
                var member = {
                    name: name,
                    note: note,
                    payments: [],
                    id: service.members.length
                };
                service.members.push(member);
                service.saveState();
            }
        };

        service.loadState();
        jQuery(window).on('pagehide', service.saveState);
        jQuery(window).on('unload', service.saveState);

        return service;
    }
]);
