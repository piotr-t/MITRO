import { Component, OnInit, HostListener, ViewChild, ElementRef, HostBinding, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnChanges {



@ViewChild('headerHeight', {static: true})
headerHeight: ElementRef;


@Input()
smalHeader;

@ViewChild('ab', {static: true})
ab: ElementRef;


hh;

  constructor() { }



  ngOnInit() {
  }


  ngOnChanges() {


  }

}
