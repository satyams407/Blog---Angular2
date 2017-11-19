import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {BlogfeedsService} from "../blogfeeds.service";
import {IBlog} from "../../IBlog";

@Component({
  selector: 'app-blogdetails',
  templateUrl: './blogdetails.component.html',
  styleUrls: ['./blogdetails.component.css']
})
export class BlogdetailsComponent implements OnInit {

  errorMessage: string;
  blog: IBlog;
  id;

  constructor(private _route: ActivatedRoute, private _router: Router, private _blogService: BlogfeedsService) {
  }

  ngOnInit() {
    const param = this._route.snapshot.paramMap.get('id');
    if (param) {
      this.id = +param;
      this.getBlog(this.id);
    }
  }

  getBlog(id: number) {
    this._blogService.getBlog(id).subscribe(
      data => this.blog = data,
      error => this.errorMessage = <any>error);
  }

  onBack(): void {
      this._router.navigate(['/welcome']);
  }

}
