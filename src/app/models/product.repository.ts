import { Product } from "./Product";

export class ProductRepository{
    products:Array<Product>=[   
     {id:1,name:"iPhone 14",price:20000,imageUrl:"1.jpeg",description:"İyi telefon",isActive:true,categoryId:1},
    {id:2,name:"iPhone 15",price:20000,imageUrl:"2.jpeg",description:"İyi telefon",isActive:true,categoryId:1},
    {id:3,name:"iPhone 16",price:30000,imageUrl:"3.jpeg",description:"İyi telefon",isActive:true,categoryId:1},
    {id:4,name:"iPhone 17",price:40000,imageUrl:"1.jpeg",description:"İyi telefon",isActive:true,categoryId:2},
    {id:5,name:"iPhone 18",price:50000,imageUrl:"2.jpeg",description:"İyi telefon",isActive:true,categoryId:2},
    {id:6,name:"iPhone 19",price:60000,imageUrl:"3.jpeg",description:"İyi telefon",isActive:true,categoryId:3}


    ];

    getProducts():Product[]
    {
     return this.products.filter(p=>p.isActive==true);
    }
  
    getProductById(id:number):Product | undefined
    {
      return this.products.find(p=>p.id==id);
    }
    getProductsByCategoryId(id:number):Product[]
    {
        return this.products.filter(p=>p.categoryId==id);
    }
}