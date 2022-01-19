import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.css']
})
export class DashboardLayoutComponent implements OnInit {

  fullName: string = '';
  imgUrl: string='';
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.getUserDetails();
  }

  getUserDetails() {
    this.fullName = this.authService.Luser.name+" "+this.authService.Luser.surname;
    this.imgUrl = this.authService.Luser.imgS;
  }


}
