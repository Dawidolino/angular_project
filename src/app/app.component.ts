import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HomeComponent,
    AboutUsComponent,
  ],
  template: `
  <!-- komponent app  -->
  <main>
    <header class="brand-name">
      <img class="brand-logo" src="/assets/logo.svg">
    </header>
  <section class="content">
<!-- import komponentu home  -->
  <app-home></app-home>
  <!-- import aboutus -->
  <!-- <app-about-us></app-about-us> -->

  </section>
  
  
  </main>`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'dawidek r';
}
