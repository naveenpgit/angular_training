import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from "@angular/common/http";
import { Observable } from "rxjs/Observable";
@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
  constructor() {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log("Header interceptor....");
    const reqClone = req.clone({
      setHeaders: { "Content-type": "application/json", foo: "bar" },
    });

    return next.handle(reqClone);
  }
}
