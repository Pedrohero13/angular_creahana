import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  div1 = true;
  div2 = false;
  div3 = false;
  onClickdiv1() {
    this.div3 = false;
    this.div1 = true;
    this.div2 = false;
  }
  onClickdiv2() {
    this.div3 = false;
    this.div1 = false;
    this.div2 = true;
  }
  onClickdiv3() {
    this.div3 = true;
    this.div1 = false;
    this.div2 = false;
  }
}
