import { router } from "./../../app.router";
import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from "@angular/router";
import { Observable } from "rxjs";
import jwt_decode from "jwt-decode";

@Injectable()
export class AuthGuards implements CanActivate {
  constructor(private router: Router) {}
  canActivate() {
    if (localStorage.getItem("token")) {
      let data: any = JSON.parse(localStorage.getItem("userDetails"));

      if (Date.now() / 1000 < data.exp) {
        return true;
      } else {
        this.router.navigate(["/auth/login"]);
        return false;
      }
    } else {
      this.router.navigate(["/auth/login"]);
      return false;
    }
  }
}
