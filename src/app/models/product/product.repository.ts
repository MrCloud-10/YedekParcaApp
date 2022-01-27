import { ProductDataSource } from "./product.datasource";
import { Brand, Model, Product } from "./product.model";

export class ProductRepository{
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

  getProductsByModel(modelId:number){
    let modelurunler=[];
    for(let prdct of this.products){
      if(prdct.modelId.includes(modelId)){
        modelurunler.push(prdct);
      }
    }
    return modelurunler;
  }
  getProductsByBrand(brandId:number){
    let urunler: Product[]=[];
    for(let mdl of this.models){
      if(mdl.brandId.includes(brandId)){
        for(let prdct of this.products){
          if(prdct.modelId.includes(mdl.id)){
            if(!urunler.includes(prdct)){
              urunler.push(prdct);
            }
          }
        }
      }
    }
    return urunler;
  }

}
