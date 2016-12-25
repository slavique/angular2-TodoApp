import { Component, ElementRef, Input, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-eyes',
  templateUrl: './eyes.component.html',
  styleUrls: ['./eyes.component.scss']
})
export class EyesComponent implements AfterViewInit {

  @ViewChild('eyescanvas') canvasRef: ElementRef;
  @ViewChild('eyesimg') eyesImgRef: ElementRef;
  private canvas: any;
  private eyesImage: any;
  private eyesHeightOnSprite = 175;
  private eyesWidth = 190;
  private eyesHeight = 180;
  private eyesCount = 7;
  private eyesYOffset = 0;

  constructor() {}

  ngAfterViewInit() {
    this.canvas = this.canvasRef.nativeElement;
    this.eyesImage = this.eyesImgRef.nativeElement;
    this.drawEyes.bind(this.drawEyes);
  }

  drawEyes() {
    console.log("draw eyes");
    this.drawEyes.bind(this)
    let eyesCanvasCtx = this.canvas.getContext('2d')
    eyesCanvasCtx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    eyesCanvasCtx.drawImage(this.eyesImage, 0, this.eyesYOffset, this.eyesWidth, this.eyesHeight, 132, 83, this.eyesWidth, this.eyesHeight);
  }
  getNextEyes() {
    console.log(this.eyesYOffset);
    if (this.eyesYOffset >= this.eyesHeightOnSprite * (this.eyesCount - 1)) {
      this.eyesYOffset = 0;
    } else {
      this.eyesYOffset += this.eyesHeightOnSprite;
    }
    requestAnimationFrame(this.drawEyes.bind(this))
  }
  getPrevEyes() {
    console.log(this.eyesYOffset);
    if (this.eyesYOffset  == 0) {
      this.eyesYOffset = this.eyesHeightOnSprite * (this.eyesCount - 1);
    } else {
      this.eyesYOffset -= this.eyesHeightOnSprite;
    }
    requestAnimationFrame(this.drawEyes.bind(this))
  }

}
