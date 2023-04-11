import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent {

  constructor(private cartService: CartService) { }


  shippingCosts!: Observable<{ type: string, price: number }[]>;

  ngOnInit() {
    this.shippingCosts = this.cartService.getShippingPrices();
  }
}
