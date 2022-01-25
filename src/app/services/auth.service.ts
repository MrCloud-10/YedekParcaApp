import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { LoginValidate, User } from "../models/user/user.model";
import { UserRepository } from "../models/user/user.repository";

@Injectable()
export class AuthService {
    loggedIn = false;
    redirectUrl?: string;
    Luser=new User(0," "," "," "," "," "," ");

    constructor( private router: Router) {
    }

    isAuthenticated() {
        const promise = new Promise((resolve,reject)=> {
            setTimeout(() => {
                resolve(this.loggedIn);
            }, 700);
        })

        return promise;
    }

    login(newLog:LoginValidate,modelU:UserRepository) {
      if(this.isInData(newLog,modelU)){
        this.loggedIn = true;
      }
    }

    logout() {
        this.loggedIn = false;
        this.Luser=new User(0," "," "," "," "," "," ");
        this.router.navigateByUrl('/login');
    }

    isInData(newLog:LoginValidate,modelU:UserRepository){
      for(let i=0;i<modelU.getUsers().length;i++){
        if(modelU.getUsers()[i].password==newLog.password && (modelU.getUsers()[i].email==newLog.loginUser || modelU.getUsers()[i].username==newLog.loginUser)){
          this.Luser=modelU.getUsers()[i];
          return true;
        }
      }
      return false;
    }
}
