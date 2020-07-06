import { TodoItem } from "./TodoItem";

export class TodoList {
  constructor(public title: string, public todos: TodoItem[]) {}
}
