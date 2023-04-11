import { Component } from '@angular/core';
import { products1 } from 'src/app/products';
import { ProductsAlertComponent } from '../products-alert/products-alert.component';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products1;



  share() {
    window.alert("Woooow")
  }

  onNotify() {
    window.alert("blip blop")
  }
}



