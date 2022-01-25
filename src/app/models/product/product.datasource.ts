import { Brand, Model, Product } from "./product.model";


export class ProductDataSource{
    private products:Product[];
    private brands:Brand[];
    private models:Model[];

    constructor(){
      this.products=new Array<Product>(
        new Product(10004545,"image.png","parça1",100,[1,2,3,4,5,10,12]),
        new Product(10004355,"image.png","parça2",150,[2,5,9,4]),
        new Product(10004564,"image.png","parça3",50,[1,2,3,4,5,6,7,8,9,10,11,12]),
        new Product(10004567,"image.png","parça4",40,[10,12]),
        new Product(10003235,"image.png","parça5",60,[1,5,3]),
        new Product(10001647,"image.png","parça6",66,[7,6,8]),
        new Product(10001356,"image.png","parça7",42,[9,10,12]),
        new Product(10004867,"image.png","parça8",74,[2,3,4,9]),
        new Product(10004697,"image.png","parça9",100,[12,11,9,7,4]),
        new Product(10000214,"image.png","parça10",301,[1,2,3,12]),
        new Product(10005678,"image.png","parça11",24.45,[3,5,7,9]),
        new Product(10001243,"image.png","parça12",12,[5,6,9]),
        new Product(10004698,"image.png","parça13",5,[2,5,4,8]),
        new Product(10009875,"image.png","parça14",500.50,[12,5,4,8,9]),
        new Product(10045285,"image.png","parça15",1.99,[1]),
        new Product(20145675,"image.png","parça16",45.97,[12])
      );
      this.brands=new Array<Brand>(
          new Brand(1,"Marka1"),
          new Brand(2,"Marka2"),
          new Brand(3,"Marka3"),
          new Brand(4,"Marka4"),
          new Brand(5,"Marka5"),
          new Brand(6,"Marka6")
      );

      this.models=new Array<Model>(
          new Model(1,"Model1",[2]),
          new Model(2,"Model2",[2,3]),
          new Model(3,"Model3",[1]),
          new Model(4,"Model4",[5]),
          new Model(5,"Model5",[6]),
          new Model(7,"Model7",[2]),
          new Model(8,"Model8",[1]),
          new Model(9,"Model9",[4]),
          new Model(10,"Model10",[4]),
          new Model(11,"Model11",[2]),
          new Model(12,"Model12",[4]),
          new Model(6,"Model6",[3])
      );
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
}
