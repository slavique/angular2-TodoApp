import { Component, ElementRef, Input, ViewChild, AfterViewInit, OnInit, DoCheck } from '@angular/core';


@Component({
  selector: 'app-shirt',
  templateUrl: './shirt.component.html',
  styleUrls: ['./shirt.component.scss']
})
export class ShirtComponent implements OnInit, ngAfterViewInit, DoCheck {

  @ViewChild('shirtcanvas') canvasRef: ElementRef;
  @ViewChild('shirtimg') shirtImgRef: ElementRef;
  private canvas: any;
  private shirtImage: any;

  constructor() {};

  drawShirt() {
    console.log("draw eyes");
    this.drawShirt.bind(this);
    let shirtCanvasCtx = this.canvas.getContext('2d');
    shirtCanvasCtx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    shirtCanvasCtx.drawImage(this.shirtImage, 0, 0, 300, 170, 70, 274, 300, 170);
  }

  ngOnInit() {
    this.canvas = this.canvasRef.nativeElement;
    this.shirtImage = this.shirtImgRef.nativeElement;
    this.drawShirt()
  }
  ngAfterViewInit() {
    this.drawShirt()
  }
  ngDoCheck() {
    this.drawShirt()
  }


}
