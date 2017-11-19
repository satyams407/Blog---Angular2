import {Component, OnInit} from '@angular/core';
import {BlogfeedsService} from "../blogfeeds/blogfeeds.service";
import {IBlog} from "../IBlog";
import {ActivatedRoute} from "@angular/router";
import {TruncatePipe} from "../Shared/TruncatePipe"

@Component({
  selector: 'app-myblogs',
  templateUrl: './myblogs.component.html',
  styleUrls: ['./myblogs.component.css'],

})
export class MyblogsComponent implements OnInit {

  myblogs: IBlog[] = [];
  id: string = " ";
  activeUser: boolean = false;
  errorMessage: string;

  constructor(private route: ActivatedRoute, private _blogService: BlogfeedsService) {
  }

  ngOnInit() {


    this._blogService.getBlogs().subscribe(blogs => {
      this.myblogs = blogs;
    }),


      this.route.params.subscribe(params => {
        this.id = params['id'];
        if (this.myblogs.find(i => i.postedBy == this.id)) {
          this.activeUser = true;
        }
      }),
      error => this.errorMessage = <any>error;
  }




  deleteblog(blogid, i) {
  //  console.log('in delete', blogid + " " + i)
    this._blogService.deleteBlog(blogid).subscribe((data => {
      this.myblogs.splice(i, 1)
    }))
  }

  popup(){
    window.open('popup.html','newWin','height=450 width=500');// open pop-up
   // window.child.secondupdate.b.value=a.value;//fill in value of text box
  }


  // getblog(): boolean {
  //   if (this.myblogs.find(i => i.postedBy == this.id)) {
  //     return true;
  //   }
  //   return false;
  // }

  // convertDate(date){
  //   let dateArray=date.split("/");
  //   let newDate = dateArray[0] + "." + dateArray[1] + "." + dateArray[2];
  //   return newDate;
  // }

}
