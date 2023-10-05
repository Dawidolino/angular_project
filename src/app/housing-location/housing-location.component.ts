import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Housinglocation } from '../housinglocation';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule, RouterModule], 
  template: `
    <a [routerLink]="['/details',Housinglocation.id]"> Read More
    <section class="listing">
      <img class="listing-photo" [src]="Housinglocation.photo" alt="sample text">
      <h2 class="listing-heading">{{Housinglocation.name}}</h2>
      <p class="listing-location">{{Housinglocation.city}}, {{Housinglocation.state}}</p>
    </section>
  </a>
  `, 
  styleUrls: ['./housing-location.component.css']
})
export class HousingLocationComponent {
  @Input()Housinglocation!:Housinglocation
}
