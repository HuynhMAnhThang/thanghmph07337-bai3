import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { data } from '../data';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
product : Product;
  constructor(
    private productService: ProductService,
   private activatedRouter:ActivatedRoute
  ) { }

  ngOnInit() {
this.getProduct();
  }
getProduct(){
this.activatedRouter.params.subscribe(param =>{
this.productService.getProduct(param.id).subscribe(data => {
  this.product =data
});
});
}
}
// this.product = 