import { Component, OnInit } from "@angular/core";
import { ProfileCrudService } from "../../../profiles/services/profile-crud.service";
import { Router } from "@angular/router";
import { Profile } from "../../models/profile";
import { ProfileFormData } from "../../../profiles/models/profile-form-data";

@Component({
  selector: "app-create-profile",
  templateUrl: "./create-profile.component.html",
  styleUrls: ["./create-profile.component.css"],
})
export class CreateProfileComponent implements OnInit {
  profileFormData: ProfileFormData = new ProfileFormData();
  constructor(
    private profileService: ProfileCrudService,
    private router: Router
  ) {}

  ngOnInit() {}
  createProfile() {
    this.profileFormData.handle = this.profileFormData.status;
    this.profileService.createProfile(this.profileFormData).subscribe(
      (data) => {
        this.router.navigate(["/dashboard"]);
      },
      (err) => {
        console.log(JSON.stringify(err));
      }
    );
  }
}
