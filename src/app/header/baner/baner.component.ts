import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-baner',
  templateUrl: './baner.component.html',
  styleUrls: ['./baner.component.scss']
})
export class BanerComponent implements OnInit {

  @Input()
  smalHeader;
  constructor() { }
ngOnInit() {}
}
