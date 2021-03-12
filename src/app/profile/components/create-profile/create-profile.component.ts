import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { ProfileFormData } from "../../models/profile-form-data";
import { ProfileCrudService } from "../../services/profile-crud.service";

@Component({
  selector: "app-create-profile",
  templateUrl: "./create-profile.component.html",
  styleUrls: ["./create-profile.component.css"],
})
export class CreateProfileComponent implements OnInit {
  profileFormData: ProfileFormData = new ProfileFormData();
  constructor(
    private ProfileService: ProfileCrudService,
    private router: Router
  ) {}

  ngOnInit() {}
  createProfile() {
    this.profileFormData.handle = this.profileFormData.status;
    this.ProfileService.createProfile(this.profileFormData).subscribe(
      (data) => {
        this.router.navigate(["/dashboard"]);
      },
      (err) => {
        console.log(JSON.stringify(err));
      }
    );
  }
}
