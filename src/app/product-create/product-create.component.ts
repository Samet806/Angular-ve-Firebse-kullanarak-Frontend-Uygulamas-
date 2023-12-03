import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../services/category.service';
import { Category } from '../models/category';
import { NgFor } from '@angular/common';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css'],
  providers:[ProductService,CategoryService]
})
export class ProductCreateComponent implements OnInit {
   categories:Category[]=[];
   error:string="";
   model:any={
  
   } // two way binding

  constructor(private productService:ProductService , private router:Router,private categoryService:CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(data=>{
      this.categories=data;
    })
  }

  saveProduct(form:NgForm)
  {
  //   name:any,price:any,imageUrl:any,description:any,isActive:any,categoryId:any

  //   if(name.value=="" || name.value.length<5)
  //   {
  //     this.error="Düzgn isim gir len";
  //     return;
  //   }


    const product= {id:1,name:this.model.name ,price:this.model.price,imageUrl:this.model.imageUrl,description:this.model.description,isActive:this.model.isActive,categoryId:this.model.categoryId};
  if(form.valid)
  {
    this.productService.createProduct(product)
    .subscribe(data=>
     {
       this.router.navigate(["/products"]);
     });
          
  }
  else
  {
    this.error="formu kontrol et";
  }
    

  console.log(this.model)
}


}
