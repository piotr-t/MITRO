import { Component, OnInit, ViewChild, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-svg',
  templateUrl: './svg.component.html',
  styleUrls: ['./svg.component.scss']
})
export class SvgComponent implements OnInit, OnChanges {

 @Input()
 smalHeader;
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges() {
  console.log(this.smalHeader);
  }


}
