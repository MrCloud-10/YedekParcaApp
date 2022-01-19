export class Product{
    constructor(
      public id:number,
      public imgS:string,
      public name:string,
      public price:number,
      public modelId:number[]
    ){}
}

export class Brand{
  constructor(
      public id:number,
      public name:string
  ){}
}

export class Model{
  constructor(
    public id:number,
    public name:string,
    public brandId:number
  ){}
}
