import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title = 'mitro';
  smallLogo = false;
  isOpen = true;
  smalHeader = false;



  constructor() { }

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

  } else {
    this.smallLogo = false;
    this.isOpen = true;
    this.smalHeader = false;
  }


}

}
