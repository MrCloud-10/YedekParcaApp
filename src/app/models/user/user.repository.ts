import { UserDataSource } from "./user.datasource";
import { LoginValidate, User } from "./user.model";


export class UserRepository{
    private userSource: UserDataSource;
    private users: User[];

    constructor(){
      this.userSource=new UserDataSource();
      this.users=new Array<User>();
      this.userSource.getUsers().forEach(u =>this.users.push(u));
    }
    getUsers(){
      return this.users;
    }

  }
