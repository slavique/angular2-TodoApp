import { Component, ElementRef, Input, ViewChild, AfterViewInit, DoCheck, OnInit } from '@angular/core';
import {TodoService} from "../../todo.service";
import {Todo} from "../../todo";

var eyesState: string;

@Component({
  selector: 'app-eyes',
  templateUrl: './eyes.component.html',
  providers: [TodoService],
  styleUrls: ['./eyes.component.scss']
})
export class EyesComponent implements OnInit, AfterViewInit, DoCheck {

  @ViewChild('eyescanvas') canvasRef: ElementRef;
  @ViewChild('eyesimg') eyesImgRef: ElementRef;
  private canvas: any;
  private eyesImage: any;
  private eyesHeightOnSprite = 175;
  private eyesWidth = 190;
  private eyesHeight = 180;
  private eyesCount = 7;
  private eyesYOffset = 0;

  private todos: Todo[];

  constructor(private todoService: TodoService) { }
  getTodos() {
    this.todoService.getTodos().then((todos: Todo[]) => this.todos = todos);
  }
  ngOnInit(): any {
    this.getTodos();
  }
  ngAfterViewInit() {
    this.canvas = this.canvasRef.nativeElement;
    this.eyesImage = this.eyesImgRef.nativeElement;
    if (eyesState == "disturbed") {
      console.log('canvas detected change!!!!!!!!!!!!!!!!!!!!!!!!!!!');
      this.getDisturbedEyes()
    } else if (eyesState == "angry") {
      this.getAngryEyes();
    }
  }
  ngDoCheck() {
    console.log("doCheck");
    if (this.todos) {
      this.todos.forEach(item => {
        //if (item.dateObj.getTime() - new Date().getTime() < 60000 && Math.abs(item.dateObj.getTime() - new Date().getTime()) < 300000 && !item.isEyesAngry) {
        if (item.isDeadlineClose && !item.isEyesDisturbed) {
          console.log('canvas detected change!!!!!!!!!!!!!!!!!!!!!!!!!!!');
          eyesState = "disturbed"
          item.isEyesDisturbed = true;
          this.getDisturbedEyes()
        } else if (item.isDeadlineHere && !item.isEyesAngry) {
          eyesState = "angry"
          item.isEyesAngry = true;
          this.getAngryEyes();
        }
      })
    }
  }

  getDisturbedEyes() {
    this.eyesYOffset = 175;
    requestAnimationFrame(this.drawEyes.bind(this))
  }
  getAngryEyes() {
    this.eyesYOffset = 525;
    requestAnimationFrame(this.drawEyes.bind(this))
  }
  drawEyes() {
    console.log("draw eyes");
    this.drawEyes.bind(this)
    let eyesCanvasCtx = this.canvas.getContext('2d')
    eyesCanvasCtx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    eyesCanvasCtx.drawImage(this.eyesImage, 0, this.eyesYOffset, this.eyesWidth, this.eyesHeight, 132, 83, this.eyesWidth, this.eyesHeight);
  }
}
