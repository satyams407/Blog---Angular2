import {Component, OnInit} from '@angular/core';
import {BlogfeedsService} from "./blogfeeds.service"
import {IBlog} from "../IBlog";
import {ActivatedRoute} from "@angular/router";
import {AuthenticationService} from "../navbar/login/authentication.service";
import {IUser} from "../../IUsers";


@Component({
  selector: 'app-blogfeeds',
  templateUrl: './blogfeeds.component.html',
  styleUrls: ['./blogfeeds.component.css']
})

export class BlogfeedsComponent implements OnInit {

  blogs: IBlog[] = [];
  filteredBlogsbyTitle: IBlog[] = [];
  errorMessage: string;
  objDate = Date.now();
  _listFilter: string;
  username: string;
  isfavorite: boolean = false;
  userfavorite;

  constructor(private _blogService: BlogfeedsService, private route: ActivatedRoute, private _authenticationService: AuthenticationService) {
  }

  ngOnInit() {

    this._blogService.getBlogs().subscribe(blogs => {
        this.blogs = blogs;
        this.filteredBlogsbyTitle = this.blogs;
      },
      error => this.errorMessage = <any>error); //typecasting to any type of error
  }

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredBlogsbyTitle = this.listFilter ? this.performFilter(this.listFilter) : this.blogs;
  }

  category() {
    return localStorage.getItem('CategoryName');
  }


  performFilter(filterBy: string): IBlog[] {
    filterBy = filterBy.toLocaleLowerCase();
     return this.blogs.filter((blog: IBlog) =>blog.blogTitle.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  islogin() {
    return localStorage.getItem('isLoggedIn');
  }

  addtofavorite(blog) {

    console.log("blog is ", blog, blog.favourite);
    blog.favourite = true;

    this.route.params.subscribe(params => {
      this.username = params['id'];
    }),


      this._authenticationService.getUser(this.username).subscribe(favorites => {
        this.userfavorite = favorites;


        let obj = this.userfavorite['favorites'];
        obj.push(blog.id.toString());
        let data = this.userfavorite;
        console.dir(this.userfavorite);
        // console.dir(obj);

        this._authenticationService.pushfavorites(this.username,data).subscribe(data => {
          console.log("rom service" + data);
        })
      })


    // this.userfavorite['favorites'].push(blog.id);
    this.togglefavorite();
  }

  removefromfavorite(blog) {
    blog.favourite = false;
    this.togglefavorite();
  }

  togglefavorite() {
    this.isfavorite = !this.isfavorite;
  }
}
