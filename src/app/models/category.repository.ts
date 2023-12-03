import { Category } from "./category";

export class CategoryRepository
{
    private categories:Array<Category>=[   
        {id:1,name:"Telefon"},
       {id:2,name:"Bilgisayar"},
       {id:3,name:"Televizyon"}
   
       ];
   
       getCategories():Category[]
       {
        return this.categories;
       }
     
       getCategoryById(id:number):Category | undefined
       {
         return this.categories.find(c=>c.id==id);
       }
}