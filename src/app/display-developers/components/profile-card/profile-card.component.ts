import { Component, OnInit, Input } from "@angular/core";
import { Profile } from "../../../profile/models/profile";

@Component({
  selector: "app-profile-card",
  templateUrl: "./profile-card.component.html",
  styleUrls: ["./profile-card.component.css"],
})
export class ProfileCardComponent implements OnInit {
  @Input()
  profile: any = {};
  constructor() {}

  ngOnInit() {}
}
