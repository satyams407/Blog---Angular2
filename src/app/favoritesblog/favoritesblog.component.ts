import {Component, OnInit} from '@angular/core';
import {BlogfeedsService} from "../blogfeeds/blogfeeds.service";
import {IBlog} from "../IBlog";
import {ActivatedRoute} from "@angular/router";
import {AuthenticationService} from "../navbar/login/authentication.service";

@Component({
  selector: 'app-favoritesblog',
  templateUrl: './favoritesblog.component.html',
  styleUrls: ['./favoritesblog.component.css']
})
export class FavoritesblogComponent implements OnInit {

  myfavoriteblogs: IBlog[] = [];
  userfavorite;
  id: string;

  constructor(private route: ActivatedRoute, private _blogService: BlogfeedsService, private _authenticationService: AuthenticationService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      //console.log(this.id + "from url")
    }),

      this._authenticationService.getUser(this.id).subscribe(favorites => {
        this.userfavorite = favorites;
      //  console.log("favorites array " + this.userfavorite);
      })

    this._blogService.getBlogs().subscribe(blogs => {
      this.myfavoriteblogs = blogs;
    })
  }

  checkid(id): boolean {
    for (let i = 0; i < 10; i++) {
      if (id == (this.userfavorite['favorites'][i])) return true;
    }
    return false;
  }
}
