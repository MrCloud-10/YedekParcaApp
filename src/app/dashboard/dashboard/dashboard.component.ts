import { Component, OnInit } from '@angular/core';
import { ProductRepository } from 'src/app/models/product/product.repository';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  products;
  brands;
  models;
  model:ProductRepository;
  constructor() {
    this.model=new ProductRepository();
    this.products=this.model.getProducts();
    this.models=this.model.getModels();
    this.brands=this.model.getBrands();
  }

  ngOnInit(): void {
  }


}
