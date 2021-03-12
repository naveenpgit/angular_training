import { Component, OnInit } from "@angular/core";
import { ProfileCrudService } from "../../../profiles/services/profile-crud.service";
import { Profile } from "../../../profile/models/profile";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit {
  name: String = JSON.parse(localStorage.getItem("userDetails")).name;
  profile: any;
  constructor(private profileService: ProfileCrudService) {}

  ngOnInit() {
    this.profileService.getMyProfile().subscribe(
      (data) => {
        console.log(data);
        this.profile = data;
      },
      (err) => {
        console.log(JSON.stringify(err));
        this.profile = null;
      }
    );
  }
}
