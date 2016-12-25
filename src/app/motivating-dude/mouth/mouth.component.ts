import { Component, ElementRef, Input, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-mouth',
  templateUrl: './mouth.component.html',
  styleUrls: ['./mouth.component.scss']
})
export class MouthComponent implements AfterViewInit {


  @ViewChild('mouthcanvas') canvasRef: ElementRef;
  @ViewChild('mouthimg') mouthImgRef: ElementRef;
  private canvas: any;
  private mouthImage: any;
  private mouthWidth = 110;
  private mouthHeight = 55;
  private mouthCount = 16;
  private mouthYOffset = 0;

  constructor() {}

  ngAfterViewInit() {
    this.canvas = this.canvasRef.nativeElement;
    this.mouthImage = this.mouthImgRef.nativeElement;
    this.drawMouth.bind(this.drawMouth);
  }

  drawMouth() {
    console.log("draw mouth");
    this.drawMouth.bind(this)
    let mouthCanvasCtx = this.canvas.getContext('2d')
    mouthCanvasCtx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    mouthCanvasCtx.drawImage(this.mouthImage, 0, this.mouthYOffset, this.mouthWidth, this.mouthHeight, 170, 260, this.mouthWidth, this.mouthHeight);
  }
  getNextMouth() {
    console.log(this.mouthYOffset);
    if (this.mouthYOffset >= this.mouthHeight * (this.mouthCount - 1)) {
      this.mouthYOffset = 0;
    } else {
      this.mouthYOffset += this.mouthHeight;
    }
    requestAnimationFrame(this.drawMouth.bind(this))
  }
  getPrevMouth() {
    console.log(this.mouthYOffset);
    if (this.mouthYOffset  == 0) {
      this.mouthYOffset = this.mouthHeight * (this.mouthCount - 1);
    } else {
      this.mouthYOffset -= this.mouthHeight;
    }
    requestAnimationFrame(this.drawMouth.bind(this))
  }

}
