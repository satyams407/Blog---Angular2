import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements  OnInit{
  title = 'app';

  ngOnInit() {
    // this._authenticationService.getUsers(username).subscribe((data) => {
    //   this.user = data;
    // })

    localStorage.setItem("isLoggedIn","false");
  }

}
