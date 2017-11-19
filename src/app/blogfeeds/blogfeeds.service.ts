import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http"
import {IBlog} from "../IBlog";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import "rxjs/add/operator/map";
import {Http} from "@angular/http";
import "rxjs/add/operator/map";


const header = {headers: new Headers({'Content-Type': 'application/json'})};

@Injectable()
export class BlogfeedsService {
  private _blogUrl = 'http://localhost:3000/blogsdata';

  constructor(private _http: HttpClient, private _Http: Http) {
  };

  getBlogs(): Observable<IBlog[]> {

    return this._http.get<IBlog[]>(this._blogUrl).catch(this.handleError);
  }

  getBlog(id: number): Observable<IBlog> {
    return this.getBlogs().map((blog: IBlog[]) => blog.find(b => b.id === id)).catch(this.handleError);
  }

  postBlog(data) {
    return this._Http.post(this._blogUrl, data).map(res => res.json()).catch(this.handleError);
  }

  updateBlog(data, id) {
    return this._Http.put(this._blogUrl + "/" + id, data)
      .map(res => res.json())
      .catch(this.handleError);
  }

  deleteBlog(id) {
    return this._Http.delete(this._blogUrl + "/" + id).map(res => res.json()).catch(this.handleError);
  }


  private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    console.log("in handle error");
    return Observable.throw(err.message);
  }
}
