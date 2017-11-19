import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  currentUser: string = " ";
  selectedTab:string = "allblogs";

  constructor(private _route: ActivatedRoute,private _router: Router) {
  }

  ngOnInit() {
    this._route.params.subscribe(params => {

      this.currentUser = params['id']
    });

    if(localStorage.getItem('isLoggedIn')=='false'){
      this._router.navigate(['/welcome']);
    }
  }

  getSelectedTab(id:string):void{
    if(id==='') this.selectedTab='allblogstab';
    this.selectedTab=id;
  }

  allblogstab():boolean{
    if(this.selectedTab==='allblogstab' ) return true;
    return false;
  }

  myposttab():boolean{
    if(this.selectedTab==='myposttab' ) return true;
    return false;
  }

  myblogstab():boolean{
    if(this.selectedTab==='myblogstab' ) return true;
    return false;
  }
  myfavoritetab():boolean{
    if(this.selectedTab==='myfavoritetab' ) return true;
    return false;
  }

}
