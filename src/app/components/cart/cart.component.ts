import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  constructor(private cartService: CartService, private formBuilder: FormBuilder) { }

  items = this.cartService.getItems();

  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  });

  onSubmit() {
    this.items = this.cartService.clearCart();
    console.warn('Your order has been submittet', this.checkoutForm.value)
    this.checkoutForm.reset();
  }
}
