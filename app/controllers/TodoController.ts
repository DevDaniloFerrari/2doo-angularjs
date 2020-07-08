import { IRouteParams } from "./../contracts/IRouteParams";
import { ITodoService } from "./../contracts/ITodoService";
import * as angular from "angular";
/// <reference path="../_all.ts" />

module doo {
  export class TodoController {
    static $inject = ["$routeParams", "todoService"];

    private order: string = "title";
    private index: number = 0;
    private todoService: ITodoService;

    constructor(private $routeParams: IRouteParams, service: ITodoService) {
      this.todoService = service;
      this.index = $routeParams.index;
    }

    save(): void {
        this.todoService.save();
    }
  }

  angular.module("doo").controller("todoCtrl", TodoController);
}
