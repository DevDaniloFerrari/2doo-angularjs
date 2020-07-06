/// <reference path="_all.ts" />

import { IRootScope } from "./contracts/IRootScope";
import * as angular from "angular";

module doo {
    'use strict';

    function start($rootScope: IRootScope) {
        var lists: string = localStorage.getItem('2doos');

        if (lists == null || lists == undefined || lists == ''){
            $rootScope.TodoLists = [];
        } else {
            $rootScope.TodoLists = angular.fromJson(lists);
        }
    }

    start.$inject = ['$rootScope'];
    angular.module('doo').run(start);
}