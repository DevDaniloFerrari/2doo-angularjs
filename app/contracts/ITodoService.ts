/// <reference path="../_all.ts" />

export interface ITodoService {
  addTodoList(title: string): void;
  addTodoItem(index: number, title: string): void;
  save(): void;
  clearData(): void;
}
