import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { Housinglocation } from '../housinglocation';
import { ProductComponent } from '../product/product.component';
import { Product } from '../product';
import { HousingService } from '../housing.service';
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
    <input type="text" placeholder="Filter by city" #filter>     
      <button class="primary" type="button" (click)="filterResults(filter.value)">Search</button>
      </form>
</section>
<section class="results">
  <app-housing-location *ngFor="let Housinglocation of filteredLocationList" [Housinglocation]="Housinglocation"></app-housing-location>  
</section>
<!-- <section class="results">
  <app-product [Product]="Product"></app-product>  
</section> -->
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

HousinglocationList:Housinglocation[]=[]
housingService: HousingService = inject(HousingService);
filteredLocationList:Housinglocation[]=[]  

constructor() {
  this.housingService.getAllHousingLocations().then((HousinglocationList: Housinglocation[]) => {
    this.HousinglocationList = HousinglocationList;
    this.filteredLocationList = HousinglocationList;
  });
}

filterResults(text:string){
if(!text){
  this.filteredLocationList = this.HousinglocationList;
}
this.filteredLocationList = this.HousinglocationList.filter(
  Housinglocation => Housinglocation?.city.toLowerCase().includes(text.toLowerCase())
);
}




// Product:Product={
//   id: 1,
//   name: 'żubr 4pak pucha',
//   price: 13.99,
//   description: 'Pod koniec dnia, kiedy przychodzi zasłużona chwila wytchnienia, każdy chce mieć u boku Żubra. Nie trzeba szukać daleko: wystarczy rozejrzeć się po okolicy, by znaleźć go tuż za rogiem. Żubr jest zawsze pewny – o jego niezmienny charakter dba Browar Dojlidy, wizytówka podlaskiego piwowarstwa. Warto poczekać, aż Żubr lekko się schłodzi – idealna temperatura to 4-6 stopni Celsjusza', //o
//   photo: 'https://res.cloudinary.com/dj484tw6k/f_auto,q_auto,fl_progressive,c_pad,b_white,w_260,h_260/v1696459926/42407.png',
//   // photo: 'https://res.cloudinary.com/dj484tw6k/f_auto,q_auto,fl_progressive,c_pad,b_white,w_260,h_260/v1593174240/8546.png',
//   availableUnit: 99
// }
}
