import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { DeveloperService } from "../../services/developer.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"],
})
export class ProfileComponent implements OnInit {
  profile: any = {};
  constructor(
    private activatedRoute: ActivatedRoute,
    private devService: DeveloperService
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.devService.getProfileDetails(params.id).subscribe(
        (data) => {
          this.profile = data;
        },
        (err) => {}
      );
    });
  }
}
