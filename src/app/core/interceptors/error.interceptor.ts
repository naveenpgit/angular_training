import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { catchError } from "rxjs/operators";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor() {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log("Error Interceptor Invoked");

    return next.handle(req).pipe(
      catchError((err) => {
        console.log(JSON.stringify(err));
        return Observable.throw({
          status: err.status,
          statusText: err.statusText,
          error: err._body,
        });
      })
    );
  }
}
