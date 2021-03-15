import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";
import jwt_decode from "jwt-decode";
import { SharedService } from "../../../core/services/shared.service";
import { share } from "rxjs/operator/share";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  login: any = {};
  error: any = {};
  constructor(private authService: AuthService, private router: Router, private sharedService: SharedService) {}

  ngOnInit() {}
  loginSubmit() {
    this.authService.loginUser(this.login).subscribe(
      (succ) => {
        //let decodedValue: any = jwt_decode(JSON.parse(succ._body).token); //decodeToken(token);
        let decodedValue: any = jwt_decode(succ.token); //decodeToken(token);
        localStorage.setItem("token", succ.token);
        localStorage.setItem("userDetails", JSON.stringify(decodedValue));
        console.log(decodedValue);
        this.sharedService.subject.next("loggedin");
        this.router.navigate(["/dashboard"]);
      },
      (err) => {
        this.error = JSON.parse(err._body);
        console.log(this.error);
      }
    );
  }
}
