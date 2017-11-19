import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from './authentication.service'
import {Router} from '@angular/router';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _router: Router, private _authenticationService: AuthenticationService) {
  }

  user;
  isValidUser: boolean = true;
  errorMessage: string;
  // signout: string = "sign out";
  // signinbutton = <HTMLInputElement>(document.getElementById("signinbutton"));

  ngOnInit() {
    // this._authenticationService.getUsers().subscribe(users => {
    //     this.users = users;
    //   },
    //   error => this.errorMessage = <any>error); //typecasting to any type of error
  }

  checkUser(username: string, password: string): void {
    // console.log("from login" + username);
    this._authenticationService.getUser(username).subscribe((data) => {
      this.user = data;
      if (this.user['password'] === password) {
        this._router.navigate(['/dashboard', this.user['id']]);
        this.user['loginStatus'] = "true";
        localStorage.setItem("isLoggedIn", "true");
      }
      else {
        this.isValidUser = false;
      }
    })
  }


}
