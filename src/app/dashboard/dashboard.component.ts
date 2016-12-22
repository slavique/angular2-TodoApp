import { Component, OnInit } from '@angular/core';
import {Todo} from "../todo";
import {TodoService} from "../todo.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  providers: [TodoService],
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  private todos: Todo[];
  private newTodo: Todo;

  constructor(private todoService: TodoService) {}

  getRandom(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  getTodos() {
    this.todoService.getTodos().then((todos: Todo[]) => this.todos = todos);
  }

  onSubmit(newtodo) {
    this.newTodo = new Todo(newtodo.value, this.getRandom(-2, 33), this.getRandom(-2, 85));
    this.todoService.insertTodo(this.newTodo);
    newtodo.value = "";
  }

  ngOnInit(): any {
    this.getTodos();
  }
}
