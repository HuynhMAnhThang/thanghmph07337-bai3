import { Injectable } from '@angular/core';
import { Product } from "../product";
import { data } from "../data";
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ProductService {
  products = data;
   selected: Product;
   api ='https://5e7b25270e04630016332d52.mockapi.io/Product';
  constructor(
    private http:HttpClient,
  ) { }

getProducts():Observable<Product[]>{
  // console.log("ô tô")
  // return this.products;
  return this.http.get<Product[]>(this.api);
}

  getProduct(id): Observable<Product>{
    console.log(id);
    return this.http.get<Product>(`${this.api}/${id}`);
  }
  editProduct(product):Observable<Product>{
return this.http.put<Product>(`${this.api}/${product.id}`,product);
  }
removeProduct(id):Observable<Product>{
//  return this.products = this.products.filter(product => product.id != id);
return this.http.delete<Product>(`${this.api}/${id}`);
}
addProduct(product):Observable<Product>{
return this.http.post<Product>(this.api,product);
}

}