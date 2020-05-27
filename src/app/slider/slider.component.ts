import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  @ViewChild('pk', {static: true})
  pk: ElementRef;

  constructor() { }

  ngOnInit() {

// console.log(this.pk.nativeElement);

  }

}
