import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HomeComponent,
    AboutUsComponent,
    RouterModule,
  ],
  template: ` 
  <main>
  <header class="brand-name">
   <a [routerLink]="['/']">  
      <img class="brand-logo" src="/assets/logo.svg">
   </a>  
    </header>
  <section class="content">
    <router-outlet></router-outlet>
  </section>
  
  
  </main>`,

  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'dawidek r';
}
