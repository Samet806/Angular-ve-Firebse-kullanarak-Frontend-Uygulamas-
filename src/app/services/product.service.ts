import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Product } from "../models/Product";
import { map ,delay} from "rxjs";

@Injectable() //local services
export class ProductService{

      private url="https://angular-shopapp-8d53e-default-rtdb.firebaseio.com/";

      constructor(private http:HttpClient)
      {

      }

      getProducts(categoryId:number)
      {
       
            return this.http.get<Product[]>(this.url+"products.json")
            .pipe(
                map(data=>{
                    const products:Product[]=[];
                     for(const key in data)
                     {
                        if(categoryId)
                        {
                            if(categoryId==data[key].categoryId)
                            {
                                products.push({...data[key],id:key})
                            }
                        }
                        
                        else{
                            products.push({...data[key],id:key})
                        }
                        }
                      
                    return products;
                }),
                delay(1000)
            
                 
            ) 
     
       
      }

      createProduct(product:Product)
      {
        return this.http.post<Product>(this.url+"products.json",product);
      }

      getProductById(id:number)
      {
        return this.http.get<Product>(this.url+"products/"+id+".json").pipe(delay(1000));
      }
     
}