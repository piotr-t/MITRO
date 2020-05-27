import { Component, HostListener, ViewChild, ElementRef, OnInit } from '@angular/core';
import { AsideComponent } from './aside/aside.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})


export class AppComponent  implements OnInit{


  smallLogo = false;
  isOpen = true;
  h2 = 'ok';
  smalHeader = false;
  noHeader = false;

constructor() {

}

   @ViewChild(AsideComponent, {static: true})
  public appaside: any;

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
        this.noHeader = false;
        if (event.target.scrollingElement.scrollTop > 1000) {
          this.noHeader = true;
        }

      } else {
        this.smallLogo = false;
        this.isOpen = true;
        this.smalHeader = false;
        this.noHeader = false;
      }
    }

}
