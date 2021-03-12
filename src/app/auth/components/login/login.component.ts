import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";
import jwt_decode from "jwt-decode";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  login: any = {};
  error: any = {};
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}
  loginSubmit() {
    this.authService.loginUser(this.login).subscribe(
      (succ) => {
        //let decodedValue: any = jwt_decode(JSON.parse(succ._body).token); //decodeToken(token);
        let decodedValue: any = jwt_decode(succ.token); //decodeToken(token);
        localStorage.setItem("token", succ.token);
        localStorage.setItem("userDetails", JSON.stringify(decodedValue));
        console.log(decodedValue);
        this.router.navigate(["/dashboard"]);
      },
      (err) => {
        this.error = JSON.parse(err._body);
        console.log(this.error);
      }
    );
  }
}
