import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section>
      <form>    
        <button class="primary" type="button">About Us</button>
      </form>
    </section>
  `,
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {

}
