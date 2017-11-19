import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http"
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import "rxjs/add/operator/map";
import {Http} from "@angular/http";


@Injectable()
export class AuthenticationService {

  private _userUrl='http://localhost:3000/usersdata/';

  constructor(private _http: HttpClient,private _Http: Http) { }

  getUser(userName): Observable<any[]> {

    return this._http.get<any[]>(this._userUrl + userName)
      .do(data => console.log('all' + JSON.stringify(data)))
      .catch(this.handleError);

  }

  pushfavorites(data,id){
    console.log('in push fav' + this._userUrl,id,data);
    console.dir(data);
    return this._Http.put(this._userUrl + "/" + id, data).map(res => res.json())
  }

  private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    console.log("in handle error");
    return Observable.throw(err.message);
  }
}
