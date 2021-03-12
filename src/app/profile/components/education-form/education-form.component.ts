import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AlertService } from "../../../core/services/alert.service";
import { Education } from "../../models/profile-form-data";
import { ProfileCrudService } from "../../services/profile-crud.service";

@Component({
  selector: "app-education-form",
  templateUrl: "./education-form.component.html",
  styleUrls: ["./education-form.component.css"],
})
export class EducationFormComponent implements OnInit {
  education: Education = new Education();

  constructor(
    private profileService: ProfileCrudService,
    private router: Router //private alertService: AlertService
  ) {}

  ngOnInit(): void {}

  addEducation() {
    this.profileService.addEducation(this.education).subscribe({
      next: (res) => {
        console.log(res);
        /*  this.alertService.setAlert({
          alertType: "success",
          message: "Education Added",
        }); */
        this.router.navigate(["/dashboard"]);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
