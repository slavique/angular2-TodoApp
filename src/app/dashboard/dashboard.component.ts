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

  getRandomTop(min: number, max: number) {
    let margin = Math.floor(Math.random() * (max - min + 1) + min);
    //console.log("margin: " + margin);
    //
    ////checkForInterception: {
    //  for (let i = 0; i < this.todos.length; i++){
    //    console.log("this.todos[i].marginTop: " + this.todos[i].marginTop)
    //
    //    if (margin > this.todos[i].marginTop && margin < this.todos[i].marginTop + 11) {
    //      margin += 7;
    //      console.log("margin incremented;###############")
    //      //continue checkForInterception;
    //    } else if (margin + 11 > this.todos[i].marginTop && margin + 11 < this.todos[i].marginTop + 11) {
    //      margin -= 7;
    //      console.log("margin decremented###############")
    //    }
    //  }
    ////}
    return margin;
  }
  getRandomLeft(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  getTodos() {
    this.todoService.getTodos().then((todos: Todo[]) => this.todos = todos);
  }

  onSubmit(title, date, time) {
    //console.log(date.value);
    //console.log(time.value);
    this.newTodo = new Todo(title.value, this.getRandomTop(1, 35), this.getRandomLeft(1, 87), date.value, time.value);
    //console.log('this.newTodo" ' + this.newTodo.dateObj);
    this.todoService.insertTodo(this.newTodo);
    title.value = "";
  }

  ngOnInit(): any {
    this.getTodos();
  }
}
