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
  //private sortedTodos: Todo[];
  private filteredTodos: Todo[];
  private newTodo: Todo;
  private margins = [{top: 5, left: 10},
    {top: 25, left: 15},
    {top: 41, left: 40},
    {top: 7, left: 40},
    {top: 5, left: 70},
    {top: 39, left: 7},
    {top: 36, left: 57}
  ];

  constructor(private todoService: TodoService) {}

  getRandomTop(min: number, max: number) {
    let margin = Math.floor(Math.random() * (max - min + 1) + min);
    return margin;
  }
  getRandomLeft(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  getTodos() {
    this.todoService.getTodos().then((todos: Todo[]) => {
      this.filteredTodos = todos.filter(index => index.dateObj.setHours(0, 0, 0, 0) == new Date().setHours(0, 0, 0, 0)).splice(0, 5);
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

  ngOnInit(): any {
    this.getTodos();
  }
}
