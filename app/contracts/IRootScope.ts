import { TodoList } from "./../models/TodoList";
export interface IRootScope extends ng.IRootScopeService {
  TodoLists: TodoList[];
}
