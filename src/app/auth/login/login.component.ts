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

  formSubmitted: boolean=false;
  formClicked: boolean=false;

  get jsonProduct(){
    return JSON.stringify(this.newLog);
  }

  constructor(public authService: AuthService, public router: Router) {
  }

  ngOnInit(): void {
    this.router.navigateByUrl(' ');
  }

  login() {
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

/*logout() {
  this.newLog=new LoginValidate();
  this.formSubmitted=false;
  this.authService.logout();

}*/

getValidationErrors(state: any, key?: string) {
  let ctrlName: string = state.name || key;
  let messages: string[] = [];
  if (state.errors) {
      for (let errorName in state.errors) {
          switch (errorName) {
              case "required":
                  messages.push(`İlgili alanı giriniz..`);
                  break;
              case "minlength":
                  messages.push(`Şifre en az 8 karakterli olmalıdır..`);
                  break;
              case "pattern":
                  messages.push("Şifre en az bir büyük,bir küçük ve bir de özel karakter içermelidir..");
                  break;
          }
      }
  }

  return messages;
}


submitForm(form:NgForm){
  this.newLog=form.value;
  this.formSubmitted = true;
  if(form.valid) {
      this.formSubmitted = false;
  }
  this.login();
}

isNotIn(){
  if(!this.authService.loggedIn && this.formClicked){
    return true;
  }
  else {
    return false;
  }
}

isClicked($event:any){
  this.formClicked=true;
}

}
