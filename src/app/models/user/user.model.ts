export class User{
    constructor(
      public id: number,
      public name: string,
      public surname: string,
      public imgS: string,
      public username: string,
      public email:string,
      public password:string
    ){ }
}

export class LoginValidate{
  constructor(
    public loginUser?: string,
    public password?: string
  ){}
}
