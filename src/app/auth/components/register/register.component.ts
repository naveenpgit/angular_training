import { Component, OnInit } from "@angular/core";
import { Register } from "../../models/register";
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent implements OnInit {
  register: Register = new Register();
  error: any = {};
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  registerSubmit() {
    console.log(JSON.stringify(this.register));
    this.authService.registerUser(this.register).subscribe(
      (data) => {
        console.log(data);
        this.router.navigate(["auth/login"]);
      },
      (err) => {
        this.error = JSON.parse(err._body);
        console.log(this.error);
      }
    );
  }
}
