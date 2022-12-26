import { Component , OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router'

import { Product, products } from '../products';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined

  addToCart(product: Product){
    this.cartService.addToCart(product)
    window.alert('Your product has been added to the cart!')
  }

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }
  ngOnInit(): void{
    // First get the product id from the current route.
    // đầu tiên, lấy route hiện tại mà chúng ta đang nhập URL
    const routeParams = this.route.snapshot.paramMap
    // lấy id của route mà chúng ta đã lấy được cái route đó.
    const productIdFromRoute = Number(routeParams.get('productID'))
  // Find the product that correspond with the id provided in route.
  // so sánh 
  this.product = products.find(product => product.id === productIdFromRoute)
  }
}
