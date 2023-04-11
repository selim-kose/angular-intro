import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products1 } from 'src/app/products';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;


  constructor(private route: ActivatedRoute, private cartService: CartService) { }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Product added to cart!')
  }


  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'))

    this.product = products1.find(product => product.id === productIdFromRoute)
  }

}
