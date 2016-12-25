import { Component, ElementRef, Input, ViewChild, AfterViewInit, OnInit } from '@angular/core';

@Component({
  selector: 'app-shirt',
  templateUrl: './shirt.component.html',
  styleUrls: ['./shirt.component.scss']
})
export class ShirtComponent implements ngAfterViewInit, OnInit {

  @ViewChild('shirtcanvas') canvasRef: ElementRef;
  @ViewChild('shirtimg') shirtImgRef: ElementRef;
  private canvas: any;
  private shirtImage: any;
  private shirtCanvasCtx: any;

  constructor() {};


  putShirtOn() {
    console.log("draw shirt");
    this.shirtCanvasCtx.drawImage(this.shirtImage, 0, 0, 300, 170, 70, 274, 300, 170);
  }
  takeShirtOff() {
    console.log("clear shirt");
    this.shirtCanvasCtx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
  ngAfterViewInit() {
    this.canvas = this.canvasRef.nativeElement;
    this.shirtImage = this.shirtImgRef.nativeElement;
    this.shirtCanvasCtx = this.canvas.getContext('2d');
    this.putShirtOn.bind(this.putShirtOn);
    this.takeShirtOff.bind(this.takeShirtOff);
  }
  ngOnInit() {
  //  this.putShirtOn();
  //
  }

  //drawshirt() {
  //  console.log("draw shirt");
  //  this.drawshirt.bind(this)
  //  let shirtCanvasCtx = this.canvas.getContext('2d')
  //  shirtCanvasCtx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  //  shirtCanvasCtx.drawImage(this.shirtImage, 0, this.shirtYOffset, this.shirtWidth, this.shirtHeight, 170, 260, this.shirtWidth, this.shirtHeight);
  //}
  //getNextshirt() {
  //  console.log(this.shirtYOffset);
  //  if (this.shirtYOffset >= this.shirtHeight * (this.shirtCount - 1)) {
  //    this.shirtYOffset = 0;
  //  } else {
  //    this.shirtYOffset += this.shirtHeight;
  //  }
  //  requestAnimationFrame(this.drawshirt.bind(this))
  //}
  //getPrevshirt() {
  //  console.log(this.shirtYOffset);
  //  if (this.shirtYOffset  == 0) {
  //    this.shirtYOffset = this.shirtHeight * (this.shirtCount - 1);
  //  } else {
  //    this.shirtYOffset -= this.shirtHeight;
  //  }
  //  requestAnimationFrame(this.drawshirt.bind(this))
  //}

}
