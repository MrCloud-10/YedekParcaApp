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
  basket=new Array<basketItem>();
  selectedPrdct:any;
  toplamTutar=0;
  araTutar=0;
  kdv=0;
  selectedItem:any;

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
   // console.log(this.inputDash.marka);
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
    //console.log(this.inputDash.model);
    if(this.inputDash.model==""){
      this.products=this.modelP.getProducts();
    }
    else{
      prdcts=this.modelP.getProductsByModel(this.inputDash.model.id);
      this.products=prdcts;
    }
  }

  addBasket(){
    let element=(<HTMLInputElement>document.getElementById(this.selectedPrdct.id)).value;
    //console.log(element,this.selectedPrdct);
    if(element!="" && Number(element)!=NaN && Number(element)>0 ){
      let item=new basketItem(this.selectedPrdct,Number(element));
      if(this.isInBasket(item)){
        for(let bskt of this.basket){
          if(bskt.Product==item.Product && item.adetNumber!=undefined && bskt.adetNumber!=undefined){
            bskt.adetNumber+=item.adetNumber;
            break;
          }
        }
      }
      else{
        this.basket.push(item);
      }
    }
    (<HTMLInputElement>document.getElementById(this.selectedPrdct.id)).value="";
    this.countToplam();
  }
  isInBasket(deger:basketItem){
    for(let bskt of this.basket){
      if(bskt.Product==deger.Product){
        return true;
      }
    }
    return false;
  }

  countToplam(){
    this.toplamTutar=0;
    this.araTutar=0;
    this.kdv=0;
    for(let deg of this.basket){
      if(deg.adetNumber!=undefined){
        this.araTutar+=(deg.Product.price*deg.adetNumber);
      }
    }
    this.kdv=this.araTutar*18/100;
    this.toplamTutar=this.kdv+this.araTutar;
  }
  deleteItem(){
    this.basket.splice(this.basket.indexOf(this.selectedItem),1);
    this.countToplam();
  }
  parcaTutar(parcaPrice:number,adet:number){
    return parcaPrice*adet;
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

export class basketItem{
  constructor (public Product?:any,
    public adetNumber:number=0){}
}

