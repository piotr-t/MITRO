import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mitro';

  @HostListener('window:scroll', ['$event'])
onScroll(event) {
  console.log(event.target.scrollingElement.scrollTop); // 100

}
}
