import {
  Component
} from '@angular/core';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

class Product {
  constructor(
    public sku: string, // declaring the instance variable and the param at the same time
    public name: string,
    public imageUrl: string,
    public department: string[],
    public price: number) {
  } 
}

@Component({
  selector: 'inventory-app',
  template: `
  <div class="inventory-app">
    <h1>{{ product.name }}</h1>
    <products-list
      [products-list]="products"
      (onProductSelected)="productWasSelected($event)">
    </products-list>
  </div>
  `
})
class InventoryApp {
  products: Product[];

  constructor() {
    this.products = [
      new Product(
        'MYSHOES',
        'Black Running Shoes',
        '/resources/images/products/black-shoes.jpg',
        ['Men', 'Shoes', 'Running Shoes'],
        109.99
      ),
      new Product(
        'NEATOJACKET',
        'Blue Jacket',
        '/resources/images/products/blue-jacket.jpg',
        ['Women', 'Apparel', 'Jackets & Vests'],
        238.99
      ),
      new Product(
        'NICEHAT',
        'A Nice Black Hat',
        '/resources/images/products/black-hat.jpg',
        ['Men', 'Accessories', 'Hats'],
        29.99
      ),
    ];
  }

  productWasSelected(product: Product): void {
    console.log('Product clicked: ', product);
  }
}

@NgModule({
  declarations: [
    InventoryApp,
  ],
  imports: [ BrowserModule ],
  bootstrap: [InventoryApp]
})
class InventoryAppModule{}

platformBrowserDynamic().bootstrapModule(InventoryAppModule);