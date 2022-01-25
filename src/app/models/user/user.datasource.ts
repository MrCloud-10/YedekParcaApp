import { User } from "./user.model";

export class UserDataSource{
    private users: User[];

    constructor(){
      this.users=new Array<User>(
        new User(1,"Yusuf","Bulut","user.png","yusufbulut","yusufblt10@outlook.com","12345abc"),
        new User(2,"Otokoç","Otomotiv","user.png","otokoç","otokoç@gmail.com","otokoç123"),
        new User(3,"Java S.","Angular","user.png","jsangular","jsangular@npm.com","npmInsta11"),
        new User(4,"a","b","user.png","abcd","abc@abc.com","1234asdf")
      );
    }

    getUsers(): User[]{
      return this.users;
    }
}
