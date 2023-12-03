import { Component, OnInit } from '@angular/core';
import { Product } from '../models/Product';
import { ProductComponent } from './product/product.component';
import { ProductRepository } from '../models/product.repository';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers:[ProductService]
})
export class ProductListComponent implements OnInit {
  products:Product[]=[];
  loading:boolean=false;
 
  // selectedProduct:Product| null;

  constructor(private route:ActivatedRoute,private productService:ProductService) {
  
  
    
   }

  ngOnInit(): void { 
    this.route.params.subscribe(params=>{
      this.loading=true;
   this.productService.getProducts(params["categoryId"]).subscribe(data=>
    {
      this.products=data;
      this.loading=false;
    })
      
    })
  }

  // selectProduct(product:Product)
  // {
  //   this.selectedProduct=product;

  // }
  // unSelectProduct()
  // {
  //   this.selectedProduct=null;
  // }



  // products=["iphone 14","iphone 15","iphone 16"]
 
 

 
}
