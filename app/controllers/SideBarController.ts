/// <reference path="../_all.ts" />

module doo {
  export class SideBarController {
    static $inject = ["$mdSidenav"];

    constructor(private $mdSidenav: ng.material.ISidenavService) {}

    close(): void {
        this.$mdSidenav('left').close();
    }

    open(): void {
        this.$mdSidenav('left').open();
    }

    toggle(): void {
        this.$mdSidenav('left').toggle();
    }
  }

  angular.module('doo').controller('sideBarCtrl', SideBarController);
}
