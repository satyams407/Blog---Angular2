import {Component, OnInit} from '@angular/core';
import {IBlogCategory} from "./IBlogCategory";
import {Router} from '@angular/router';
import {AuthenticationService} from './login/authentication.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user;
  activeUser;
  check: boolean;

  constructor(private _router: Router, private _authenticationService: AuthenticationService) {
  }

  ngOnInit() {
    localStorage.setItem("isLoggedIn", "false");
    localStorage.setItem("CategoryName", "home");
  }

  blogCategory: string[] = [
    "Technology",
    "Entrepreneurship",
    "Business",
    "Freelancing",
    "Culture",
    "Entertainment",
    "Travel"
  ];


  Logout() {
    // this._authenticationService.getUsers(username).subscribe((data) => {
    //   this.user = data;
    // this.activeUser = this.user.find(item => item.=== true);
    // if (this.activeUser) {
    //   this.user['loginStatus'] = false;
    //   this.check=false;
    // }
    //  this._userservice.updateUser(this.activeUser).subscribe();
    location.reload();
    localStorage.setItem("isLoggedIn", "false");
    this._router.navigate(['/welcome']);
  }


  isLogIn() {
   // console.log("localstorageis ", localStorage.getItem('isLoggedIn'));
    return localStorage.getItem('isLoggedIn');
  }

  getCategory(categoryName: string) {
    localStorage.setItem("CategoryName", categoryName);
   // console.log(localStorage.getItem('CategoryName'));
  }

}
