import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { Housinglocation } from '../housinglocation';
import { ProductComponent } from '../product/product.component';
import { Product } from '../product';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,
  HousingLocationComponent,
  ProductComponent,
],
  template: `
  <section>
    <form>
      <input type="text">
      <button class="primary" type="button">Search</button>
      </form>
</section>
<section class="results">
  <app-housing-location [Housinglocation]="Housinglocation"></app-housing-location>  
</section>
<section class="results">
  <app-product [Product]="Product"></app-product>  
</section>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

// readonly baseUrl = 'https://res.cloudinary.com/dj484tw6k/f_auto,q_auto,fl_progressive,c_pad,b_white,w_260,h_260/v1593174240/8546.png';
// let this.baseUrl=baseUrl;

Housinglocation:Housinglocation={
  id: 200,
  name: 'Mięso',
  city: 'Mięsowo',
  state: 'Mięsk',
  photo: 'https://res.cloudinary.com/dj484tw6k/f_auto,q_auto,fl_progressive,c_pad,b_white,w_260,h_260/v1593174240/8546.png',
  availableUnit: 10,
  wifi: true,
  laundry: false
}
Product:Product={
  id: 1,
  name: 'żubr 4pak pucha',
  price: 13.99,
  description: 'Pod koniec dnia, kiedy przychodzi zasłużona chwila wytchnienia, każdy chce mieć u boku Żubra. Nie trzeba szukać daleko: wystarczy rozejrzeć się po okolicy, by znaleźć go tuż za rogiem. Żubr jest zawsze pewny – o jego niezmienny charakter dba Browar Dojlidy, wizytówka podlaskiego piwowarstwa. Warto poczekać, aż Żubr lekko się schłodzi – idealna temperatura to 4-6 stopni Celsjusza', //o
  photo: 'https://res.cloudinary.com/dj484tw6k/f_auto,q_auto,fl_progressive,c_pad,b_white,w_260,h_260/v1696459926/42407.png',
  // photo: 'https://res.cloudinary.com/dj484tw6k/f_auto,q_auto,fl_progressive,c_pad,b_white,w_260,h_260/v1593174240/8546.png',
  availableUnit: 99
}
}
