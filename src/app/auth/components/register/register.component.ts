import { Component, OnInit } from "@angular/core";
import { Register } from "../../models/register";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent implements OnInit {
  register: Register = new Register();
  error: any = {};
  constructor(private authService: AuthService) {}

  ngOnInit() {}

  registerSubmit() {
    console.log(JSON.stringify(this.register));
    this.authService.registerUser(this.register).subscribe(
      (data) => {
        console.log(JSON.stringify(data));
      },
      (err) => {
        console.log(err.error);
        this.error = err.error;
      }
    );
  }
}
