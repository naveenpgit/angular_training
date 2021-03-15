import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { SharedService } from "../../../core/services/shared.service";

@Component({
  selector: "app-logout",
  templateUrl: "./logout.component.html",
  styleUrls: ["./logout.component.css"],
})
export class LogoutComponent implements OnInit {
  constructor(private router: Router, private sharedService: SharedService) {}

  ngOnInit() {
    localStorage.clear();
    this.sharedService.subject.next("");
    this.router.navigate(["/auth/login"]);
  }
}
