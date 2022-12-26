import { Component , OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router'

import { Product, products } from '../products';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined
  constructor(private route:ActivatedRoute) { }
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
