import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../models/category';
import { map } from "rxjs";
@Injectable()
export class CategoryService {
  private url="https://angular-shopapp-8d53e-default-rtdb.firebaseio.com/";

  constructor(private http:HttpClient) { }

  getCategories()
  {
    return this.http.get<Category[]>(this.url+"categories.json")
    .pipe(
      map(data=>{
        const categories:Category[]=[]
        for(const key in data)
        {
          categories.push({...data[key],id:key})
        }
        return categories;
      })
    )

  }

  createCategory(category:Category)
  {
    return this.http.post<Category>(this.url+"categories.json",category);
  }
}
