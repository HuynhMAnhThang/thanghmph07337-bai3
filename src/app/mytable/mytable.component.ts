import { Component, OnInit } from "@angular/core";
import { Product } from "../product";
import { ProductService } from "../services/product.service";
import { ActivatedRoute,Router } from "@angular/router";
ActivatedRoute

@Component({
  selector: "app-mytable",
  templateUrl: "./mytable.component.html",
  styleUrls: ["./mytable.component.css"]
})
export class MytableComponent implements OnInit {
products  :Product[];//hienthi danhsach
product: Product = new Product();//[(ngmodel)]
  constructor(
    private productServices:ProductService,
    private  route :ActivatedRoute,
    private router :Router,
  ) {}

  ngOnInit() {
  
this.getProducts();
this.getProduct();
  }
  getProducts(){
    return this.productServices.getProducts().subscribe(data => this.products=data)
  }
getProduct(){
this.route.params.subscribe(param =>{
this.productServices.getProduct(param.id).subscribe(data => {
  this.product =data
});
});
}
editProduct(){
this.productServices.editProduct(this.product).subscribe(data => {
  this.router.navigateByUrl('/home')
} )
}

  xoa(id){
    this.productServices.removeProduct(id).subscribe(data => {
    this.products=  this.products.filter(product=>product.id != id)
 
});
  //  this.products = this.productServices.removeProduct(id);
  }
  addProduct(){
   this.productServices.addProduct(this.product).subscribe(data => {
  this.router.navigateByUrl('/home')
} )
  }
 



}
