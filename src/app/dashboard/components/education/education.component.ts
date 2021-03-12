import { Component, Input, OnInit } from "@angular/core";
import { Profile } from "../../../profile/models/profile";

@Component({
  selector: "app-education",
  templateUrl: "./education.component.html",
  styleUrls: ["./education.component.css"],
})
export class EducationComponent implements OnInit {
  @Input()
  profile?: Profile;

  constructor() {}

  ngOnInit(): void {}
}
