import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Register } from "../models/register";
import { Observable } from "rxjs/Observable";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class AuthService {
  constructor(private http: Http, private httpCl: HttpClient) {}

  registerUser(data: Register): Observable<any> {
    return this.httpCl.post("api/users/register", data);
    //return this.http.post("api/users/register", data);
  }

  loginUser(data: any): Observable<any> {
    return this.httpCl.post("api/users/login", data);
    //return this.http.post("api/users/login", data);
  }
}
