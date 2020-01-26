import { Component, OnInit, HostListener, ViewChild, ElementRef, HostBinding } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  smallLogo = false;
  isOpen = true;
  smalHeader = false;


@ViewChild('headerr', {static: true})
header: ElementRef;

nextId = 1;
  constructor() { }




   // dobre, można przypisać do komponentu różne atrybuty http://www.angular.love/2018/01/31/angular-dekorator-hostbinding/
  @HostBinding('class.hhh') prod: boolean ;

  ngOnInit() {
  }


  toggle() {
    this.isOpen = !this.isOpen;
  }

  @HostListener('window:scroll', ['$event'])
onScroll(event) {
  if (event.target.scrollingElement.scrollTop > 300) {
    this.smallLogo = true;
    this.isOpen = false;
    this.smalHeader = true;
    this.prod = true;

  } else {
    this.smallLogo = false;
    this.isOpen = true;
    this.smalHeader = false;
    this.prod = false;
  }
}

}
