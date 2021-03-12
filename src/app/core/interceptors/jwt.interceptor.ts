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
    console.log("JWT Interceptor Invoked");
    if (req.url.endsWith("login") || req.url.endsWith("register")) {
      return next.handle(req);
    }

    let data: any = JSON.parse(localStorage.getItem("userDetails"));

    if (Date.now() / 1000 < data.exp) {
      const reqClone = req.clone({
        setHeaders: { Authorization: `${localStorage.getItem("token")}` },
      });
      return next.handle(reqClone);
    }
  }
}
