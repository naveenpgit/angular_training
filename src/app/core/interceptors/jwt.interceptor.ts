import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from "@angular/common/http";
import { Observable } from "rxjs/Observable";
@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor() {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log("Finally....");
    const reqClone = req.clone({
      setHeaders: { Authorization: `${localStorage.getItem("token")}` },
    });

    return null;
  }
}
