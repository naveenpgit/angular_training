import { Component, OnInit } from "@angular/core";

import { ProfileCrudService } from "../../../profile/services/profile-crud.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit {
  name: String = JSON.parse(localStorage.getItem("userDetails")).name;
  profile: any;
  constructor(private ProfileService: ProfileCrudService) {}

  ngOnInit() {
    this.ProfileService.getMyProfile().subscribe(
      (data) => {
        this.profile = data;
      },
      (err) => {
        console.log(JSON.stringify(err));
        this.profile = null;
      }
    );
  }
}
