/// <reference path="_all.ts" />

module doo {
    'use strict';

    function config($mdThemingProvider: ng.material.IThemingProvider) {
        $mdThemingProvider.theme('default').primaryPalette('pink').accentPalette('indigo');
    }

    config.$inject = ['$mdThemingProvider'];
    angular.module('doo').config(config);
}