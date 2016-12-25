import { Component, ElementRef, Input, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements AfterViewInit {

  @ViewChild('bodycanvas') canvasRef: ElementRef;
  @ViewChild('bodyimg') bodyImgRef: ElementRef;
  private canvas: any;
  private bodyImage: any;
  private bodyHeightOnSprite = 465;
  private bodyWidth = 375;
  private bodyHeight = 455;
  private bodyCount = 3;
  private bodyYOffset = 0;

  constructor() {}

  ngAfterViewInit() {
    this.canvas = this.canvasRef.nativeElement;
    this.bodyImage = this.bodyImgRef.nativeElement;
    this.drawBody.bind(this.drawBody);
  }

  drawBody() {
    console.log("draw body");
    this.drawBody.bind(this)
    let bodyCanvasCtx = this.canvas.getContext('2d')
    bodyCanvasCtx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    bodyCanvasCtx.drawImage(this.bodyImage, 5, this.bodyYOffset, this.bodyWidth, this.bodyHeight, 40, 10, this.bodyWidth, this.bodyHeight);
  }
  getNextBody() {
    console.log(this.bodyYOffset);
    if (this.bodyYOffset >= this.bodyHeightOnSprite * (this.bodyCount - 1)) {
      this.bodyYOffset = 0;
    } else {
      this.bodyYOffset += this.bodyHeightOnSprite;
    }
    requestAnimationFrame(this.drawBody.bind(this))
  }
  getPrevBody() {
    console.log(this.bodyYOffset);
    if (this.bodyYOffset  == 0) {
      this.bodyYOffset = this.bodyHeightOnSprite * (this.bodyCount - 1);
    } else {
      this.bodyYOffset -= this.bodyHeightOnSprite;
    }
    requestAnimationFrame(this.drawBody.bind(this))
  }

  ngOnInit() {
  }

}

