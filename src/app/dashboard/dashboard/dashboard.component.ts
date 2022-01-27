import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Brand, Product } from 'src/app/models/product/product.model';
import { ProductRepository } from 'src/app/models/product/product.repository';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  inputDash=new fromDash();
  products;
  brands;
  models;
  modelP:ProductRepository;
  msg=false;
  basket=new Array<[Product,number]>();
  selectedPrdct:any;

  constructor() {
    this.modelP=new ProductRepository();
    this.products=this.modelP.getProducts();
    this.models=this.modelP.getModels();
    this.brands=this.modelP.getBrands();
  }
  get jsonProduct(){
    return JSON.stringify(this.inputDash);
  }

  ngOnInit(): void {
  }

  prdctSearch(state: any, key?: number){
    let prdcts=[];
    console.log(state);
    for(let prdct of this.modelP.getProducts()){
      if(prdct.id.toString().includes(state.control.value)){
        prdcts.push(prdct);
      }
    }
    if(prdcts.length>0){
      this.msg=false;
      this.products=prdcts;
    }
    else{
      this.msg=true;
      this.products=this.modelP.getProducts();
    }
    if(state.model==undefined || state.model==""){
      this.msg=false;
      this.products=this.modelP.getProducts();
    }

  }
  onChangeMarka(){
    let prdcts=[];
    console.log(this.inputDash.marka);
    if(this.inputDash.marka==""){
      this.products=this.modelP.getProducts();
    }
    else{
      prdcts=this.modelP.getProductsByBrand(this.inputDash.marka.id);
      this.products=prdcts;
    }
  }
  onChangeModel(){
    let prdcts=[];
    console.log(this.inputDash.model);
    if(this.inputDash.model==""){
      this.products=this.modelP.getProducts();
    }
    else{
      prdcts=this.modelP.getProductsByModel(this.inputDash.model.id);
      this.products=prdcts;
    }
  }
  addBasket(){//ekleme işlemleri gerçekleştirilecek
    let element=(<HTMLInputElement>document.getElementById(this.selectedPrdct.id)).value;

    if(element!=""){

    }
  }

  isInBasket(deger:any){
    for(let bskt of this.basket){
      if(this.basket.includes(deger)){
        return true;
      }
    }
    return false;
  }


}
export class fromDash{
  constructor(
      public marka?:any,
      public model?:any,
      public urunNo?:number,
      public adet?:number[]
  ){}
}

