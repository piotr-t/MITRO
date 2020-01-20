import { Component, HostListener, ViewChild, ElementRef, OnInit } from '@angular/core';
import { AsideComponent } from './aside/aside.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})


export class AppComponent  implements OnInit{


   @ViewChild(AsideComponent, {static: true})
  public appaside: any;

  ngOnInit() {


      }

}
