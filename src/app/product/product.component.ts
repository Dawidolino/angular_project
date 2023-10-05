import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../product';
@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="listing">
      <img class="listing-photo" [src]="Product.photo" alt="sample text">
      <h2 class="listing-heading">{{Product.name}}   {{Product.price}} polskich złotych</h2>
      <p class="listing-description">{{Product.description}}</p>
      <p class="listing-heading">availability: {{Product.availableUnit}}</p>
    </section>
  `,
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
@Input()Product!:Product
}
