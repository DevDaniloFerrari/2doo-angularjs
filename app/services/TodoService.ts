import { ITodoService } from './../contracts/ITodoService';
/// <reference path="../_all.ts" />

import { IRootScope } from "../contracts/IRootScope";
import { TodoList } from '../models/TodoList';
import * as angular from 'angular';
import { TodoItem } from '../models/TodoItem';

module doo {
  "user strict";

  export class TodoService implements ITodoService {
    static $inject = ["$rootScope"];

    private $rootScope: IRootScope;

    constructor(private rootScope: IRootScope) {
      this.$rootScope = rootScope;
    }

    addTodoList(title: string): void {
      this.$rootScope.TodoLists.push(new TodoList(title, []));
      this.save();
    }

    addTodoItem(index: number, title: string): void {
      this.$rootScope.TodoLists[index].todos.push(new TodoItem(title, false));
      this.save();
    }

    save(): void {
        localStorage.setItem('2doos', angular.toJson(this.$rootScope.TodoLists));
    }

    clearData(): void {
      localStorage.removeItem('2doos');
      this.$rootScope.TodoLists = [];
    }
  }

  angular.module('doo').service('todoService', TodoService);
}
