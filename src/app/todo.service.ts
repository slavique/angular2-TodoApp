import  { Injectable } from '@angular/core';
import {TODOS} from "./mock-todo";
import {Todo} from "./todo";

@Injectable()
export class TodoService {
  getTodos() {
    return Promise.resolve(TODOS);
  }
  insertTodo(todo: Todo) {
    Promise.resolve(TODOS).then((todos: Todo[]) => todos.push(todo));
  }
}
