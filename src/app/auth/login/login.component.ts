import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserRepository } from 'src/app/models/user/user.repository';
import { LoginValidate } from 'src/app/models/user/user.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  modelU: UserRepository=new UserRepository();

  newLog:LoginValidate=new LoginValidate();

  newUser:any;

  formSubmitted: boolean=false;

  get jsonProduct(){
    return JSON.stringify(this.newLog);
  }

  constructor(public authService: AuthService, public router: Router) {
  }

  ngOnInit(): void {
    this.router.navigateByUrl(' ');
  }

  login() {
    console.log(this.authService.loggedIn);
    this.authService.login(this.newLog,this.modelU);
    this.authService.isAuthenticated()
      .then(isAuthenticated => {
        if (isAuthenticated) {
          let redirectUrl = this.authService.redirectUrl ?
            this.router.parseUrl(this.authService.redirectUrl) :
            '/board';
            this.router.navigateByUrl(redirectUrl);
        }
      });


}

logout() {
  this.authService.logout();
}

getFormValidationErrors(form:NgForm):string[]{
  let messages: string[] = [];

    Object.keys(form.controls).forEach(k=> {
        console.log(k);
        console.log(form.controls[k]);

        this.getValidationErrors(form.controls[k],k)
            .forEach(message=> messages.push(message));
    })

    return messages;
}
getValidationErrors(state: any, key?: string) {
  let ctrlName: string = state.name || key;
  let messages: string[] = [];
  if (state.errors) {
      for (let errorName in state.errors) {
          switch (errorName) {
              case "required":
                  messages.push(`${ctrlName} giriniz..`);
                  break;
              case "minlength":
                  messages.push(`En az 8 karakterli olmalıdır,${ctrlName}..`);
                  break;
              case "pattern":
                  messages.push(`${ctrlName} tanımlanmamış karakter içermektedir..`);
                  break;
          }
      }
  }
  return messages;
}


submitForm(form:NgForm){
  console.log(form);
  this.newLog=form.value;
  console.log(this.newLog);
    this.formSubmitted = true;
    if(form.valid) {
        this.formSubmitted = false;
    }
  this.login();
}
isNotIn(){
  if(this.authService.loggedIn){
    return false;
  }
  else{
    return true;
  }
}



}
