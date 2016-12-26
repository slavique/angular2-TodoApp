import { Component, OnInit, DoCheck } from '@angular/core';
import {Todo} from "../todo";
import {TodoService} from "../todo.service";



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  providers: [TodoService],
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, DoCheck {
  private todos: Todo[];
  //private sortedTodos: Todo[];
  private filteredTodos: Todo[];
  private newTodo: Todo;
  private margins = [
    {top: 6, left: 10},
    {top: 26, left: 11},
    {top: 40, left: 40},
    {top: 7, left: 40},
    {top: 5, left: 70},
    {top: 39, left: 7},
    {top: 36, left: 57}
  ];

  constructor(private todoService: TodoService) {}

  getTodos() {
    this.todoService.getTodos().then((todos: Todo[]) => {
      this.filteredTodos = todos.filter(index => Math.abs(new Date().getTime() - index.dateObj.getTime()) < 36000000);
    });
  }

  onSubmit(title, date, time) {
    let marginTop: number = this.margins[6].top;
    let marginLeft: number = this.margins[6].left;
    for (let i = 0; i < this.margins.length -1; i++) {
      if (i == this.filteredTodos.length) {
        marginTop = this.margins[i].top;
        marginLeft = this.margins[i].left;
      }
    }
    this.newTodo = new Todo(title.value, marginTop, marginLeft, date.value, time.value);
    console.log('this.newTodo.dateObj.getTime(): ' + this.newTodo.dateObj.getTime());
    if (Math.abs(new Date().getTime() - this.newTodo.dateObj.getTime()) < 36000000) { // if task within 20 hours
      console.log('new Date().getTime() - this.newTodo.dateObj.getTime(): ',  new Date().getTime() - this.newTodo.dateObj.getTime());

      this.filteredTodos.forEach(item => console.log('before: ' + item.time));
      this.filteredTodos.forEach(item => console.log('before: ' + item.dateObj.getTime()));
      this.filteredTodos = this.filteredTodos.sort((a, b) => b.dateObj.getTime() - a.dateObj.getTime());
      this.filteredTodos.forEach(item => console.log('after: ' + item.time));
      this.filteredTodos.forEach(item => console.log('after: ' + item.dateObj.getTime()));
      if (this.filteredTodos.length < 7) {
        this.filteredTodos.push(this.newTodo);
      }
    }

    this.todoService.insertTodo(this.newTodo);
    title.value = "";

  }
  ngDoCheck() {
    if (this.filteredTodos) {
      this.filteredTodos.forEach(item => {
        if (Math.abs(item.dateObj.getTime() - new Date().getTime()) < 300000) {
          item.isDeadlineHere = true;
        } else if (Math.abs(item.dateObj.getTime() - new Date().getTime()) < 7200000) {
          item.isDeadlineClose = true;
        }
      });
    }

  }
  ngOnInit(): any {
    this.getTodos();
  }
}
