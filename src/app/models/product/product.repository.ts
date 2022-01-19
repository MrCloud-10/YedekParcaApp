import { time } from "console";
import { ProductDataSource } from "./product.datasource";
import { Brand, Model, Product } from "./product.model";

export class DashboardRepsitory{
  private productSource: ProductDataSource;
  private products: Product[];
  private brands: Brand[];
  private models: Model[];

  constructor(){
    this.productSource=new ProductDataSource();
    this.products=new Array<Product>();
    this.brands=new Array<Brand>();
    this.models=new Array<Model>();
    this.productSource.getProducts().forEach(p =>this.products.push(p));
    this.productSource.getBrands().forEach(b =>this.brands.push(b));
    this.productSource.getModels().forEach(m =>this.models.push(m));
  }
  getProducts():Product[]{
    return this.products;
  }
  getBrands():Brand[]{
    return this.brands;
  }
  getModels():Model[]{
    return this.models;
  }

  getProductById(Id:number):Product[]{//dashboarddan gelen ürün kodu ile ürün listelenecek
    for(let i=0 ;i<this.products.length;i++){
      if(this.products[i].id==Id){
        return [this.products[i]];
      }
    }
    return [];
  }
  getModelById(Id:number):Model[]{
    for(let i=0 ;i<this.models.length;i++){
      if(this.models[i].id==Id){
        return [this.models[i]];
      }
    }
    return [];
  }
  getBrandsById(Id:number):Brand[]{
    for(let i=0 ;i<this.brands.length;i++){
      if(this.brands[i].id==Id){
        return [this.brands[i]];
      }
    }
    return [];
  }
  getModelByName(name:string):Model[]{
    for(let i=0 ;i<this.models.length;i++){
      if(this.models[i].name==name){
        return [this.models[i]];
      }
    }
    return [];
  }
  getBrandByName(name:string):Brand[]{
    for(let i=0 ;i<this.brands.length;i++){
      if(this.brands[i].name==name){
        return [this.brands[i]];
      }
    }
    return [];
  }
  getProductByModel(model:string){//burada dashboard model adı alınarak ürünler listelenecek
    let probymodel: Product[];
    let pmodel: Model[]=this.getModelByName(model);
    for(let i=0;i<this.products.length;i++){
      for(let j=0;j<pmodel.length;j++){

      }
    }
  }
  getProductByBrand(model:string){//burada dashboard brand adı alınarak ürünler listelenecek

  }

}
