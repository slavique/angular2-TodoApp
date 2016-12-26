import { Component, ElementRef, Input, ViewChild, AfterViewInit, DoCheck, OnInit } from '@angular/core';
import {TodoService} from "../../todo.service";
import {Todo} from "../../todo";
var mouthState: string;

@Component({
  selector: 'app-mouth',
  templateUrl: './mouth.component.html',
  styleUrls: ['./mouth.component.scss']
})

export class MouthComponent implements AfterViewInit, DoCheck, OnInit {


  @ViewChild('mouthcanvas') canvasRef: ElementRef;
  @ViewChild('mouthimg') mouthImgRef: ElementRef;
  private canvas: any;
  private mouthImage: any;
  private mouthWidth = 110;
  private mouthHeight = 55;
  private mouthCount = 16;
  private mouthYOffset = 0;

  private todos: Todo[];

  constructor(private todoService: TodoService) {}

  getTodos() {
    this.todoService.getTodos().then((todos: Todo[]) => this.todos = todos);
  }
  ngOnInit(): any {
    console.log("ngOnInit - mouth!!!!!!!!!!!!!!!")
    this.getTodos();
  }
  ngAfterViewInit() {
    console.log("ngAfterViewInit - mouth!!!!!!!!!!!!!!!")
    this.canvas = this.canvasRef.nativeElement;
    this.mouthImage = this.mouthImgRef.nativeElement;
    if (mouthState == "disturbed") {
      console.log('canvas detected change!!!!!!!!!!!!!!!!!!!!!!!!!!!');
      this.getDisturbedMouth()
    } else if (mouthState == "angry") {
      this.getAngryMouth();
    }
  }
  ngDoCheck() {
    console.log("doCheck");
    if (this.todos) {
      this.todos.forEach(item => {
        //if (item.dateObj.getTime() - new Date().getTime() < 60000 && Math.abs(item.dateObj.getTime() - new Date().getTime()) < 300000 && !item.isEyesAngry) {
        if (item.isDeadlineClose && !item.isMouthDisturbed) {
          console.log('canvas detected change!!!!!!!!!!!!!!!!!!!!!!!!!!!');
          mouthState = "disturbed";
          item.isMouthDisturbed = true;
          this.getDisturbedMouth()
        } else if (item.isDeadlineHere && !item.isMouthAngry) {
          mouthState = "angry"
          item.isMouthAngry = true;
          this.getAngryMouth();
        }
      })
    }
  }
  getDisturbedMouth() {
    this.mouthYOffset = 55;
    requestAnimationFrame(this.drawMouth.bind(this))
  }
  getAngryMouth() {
    this.mouthYOffset = 825;
    requestAnimationFrame(this.drawMouth.bind(this))
  }

  drawMouth() {
    console.log("draw mouth");
    this.drawMouth.bind(this)
    let mouthCanvasCtx = this.canvas.getContext('2d')
    mouthCanvasCtx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    mouthCanvasCtx.drawImage(this.mouthImage, 0, this.mouthYOffset, this.mouthWidth, this.mouthHeight, 170, 260, this.mouthWidth, this.mouthHeight);
  }
}
