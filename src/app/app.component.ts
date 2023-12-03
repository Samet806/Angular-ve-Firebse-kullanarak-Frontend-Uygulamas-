import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ProductService]
}) 


export class AppComponent {
 private title :string= 'Home Page';

 constructor(private productService:ProductService)
 {
   
 }

 public getTitle()
 {
  return this.title;
 }




 
}
