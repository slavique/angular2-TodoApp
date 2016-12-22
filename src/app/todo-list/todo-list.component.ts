import { Component, OnInit } from '@angular/core';
import {TodoService} from "../todo.service";
import {Todo} from "../todo";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  providers: [TodoService],
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  private todos: Todo[];

  constructor(private todoService: TodoService) { }

  getTodos() {
    this.todoService.getTodos().then((todos: Todo[]) => this.todos = todos);
  }
  ngOnInit(): any {
    this.getTodos();
  }

}
