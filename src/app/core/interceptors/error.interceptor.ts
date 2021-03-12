import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from "@angular/common/http";

import { Router } from "@angular/router";
import { catchError } from "rxjs/operators";
import { Observable } from "rxjs/Observable";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private router: Router) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log("Error Interceptor");
    return next.handle(req).pipe(
      catchError((err) => {
        console.log("From Interceptor Error ", JSON.stringify(err));
        return Observable.throw({
          status: err.status,
          statusText: err.statusText,
          error: err._body,
        });
      })
    );
  }
}
