import { Component } from '@angular/core';
// import { SwiperComponent } from "swiper/angular";

// import Swiper core and required modules
import SwiperCore, { EffectCards } from "swiper";

// install Swiper modules
SwiperCore.use([EffectCards]);

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  show = true;

  constructor() {}

  hide() {
    this.show = !this.show;
  }

  share() {
    console.log('check');
  }

}
