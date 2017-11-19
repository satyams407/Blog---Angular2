import {Component, OnInit} from '@angular/core';
import {BlogfeedsService} from "../blogfeeds/blogfeeds.service";
import {IBlog} from "../IBlog";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-postblog',
  templateUrl: './postblog.component.html',
  styleUrls: ['./postblog.component.css']
})

export class PostblogComponent implements OnInit {

  blogs: IBlog[] = [];
  errorMessage: string;
  objDate = Date.now();
  title = <HTMLInputElement>document.getElementById("titleid");
  category = <HTMLInputElement>document.getElementById("categoryid");
  subject = <HTMLInputElement>document.getElementById("subjectid");
  description = <HTMLInputElement>document.getElementById("descriptionid");
  image = <HTMLInputElement>document.getElementById("image");

  id: number;
  fromUpdate: boolean = false;
  blog: IBlog;
  author;
  upatedtitle: string;
  upatedcategory: string;
  upateddescription: string;
  upatedauthor: string;
  upatedsubject: string;

  constructor(private  _blogService: BlogfeedsService, private _route: ActivatedRoute, private _router: Router) {
  }

  ngOnInit() {


    this._route.params.subscribe(params => {
      if (!isNaN(+params['id'])) {
        this.id = +params['id'];
      }
      else {
        this.id = params['id'];
        this.author = this.id;
      }
      console.log("getting id " + this.id);

    });


    if (isNaN(this.id) == false) {
      this.fromUpdate = true;
      this._blogService.getBlog(this.id).subscribe(blogs => {
          this.blog = blogs;
          this.upatedtitle = this.blog['blogTitle'];
          this.upateddescription = this.blog['blogFullDescription'];
          this.upatedcategory = this.blog['category'];
          this.upatedsubject = this.blog['blogShortDescription'];
          this.upatedauthor = this.blog['postedBy'];

          console.log("particular " + this.blog['blogTitle'] + " updated one " + this.upatedtitle);
        },
        error => this.errorMessage = <any>error);
    }


    this._blogService.getBlogs().subscribe(blogs => {
      this.blogs = blogs;
    });

    let path = this._router.parseUrl(this._router.url);
    console.log("path is " + path);
  }


  postblog(title, category, subject, description,postedBy,image) {

    console.log("from parramter post blog by" + postedBy);
    let data = {
      blogTitle: title,
      category: category,
      blogShortDescription: subject,
      blogFullDescription: description,
      imageURL: "./assets/default.jpg",
      favourite: false,
      postedBy: postedBy,
      postedDate: this.objDate
    };


    if (this.fromUpdate == true) {
      this.blog['postedDate'] = new Date();
      console.log("from update" + data.blogFullDescription);
      this._blogService.updateBlog(data, this.id).subscribe(data => {
          this.blogs.push(data);
        },
        error => this.errorMessage = <any>error
      );
      alert('your blog has been updated');
      this._router.navigate(['/dashboard', this.blog['postedBy']])
    }

    else {
      this._blogService.postBlog(data).subscribe(data => {
          this.blogs.push(data);
        },
        error => this.errorMessage = <any>error
      );

      this.title = null;
      this.category = null;
      this.description = null;
      this.subject = null;
      this.image = null;
      alert('your blog has been submitted');
    }
  }
}
