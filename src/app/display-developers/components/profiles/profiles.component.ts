import { Component, OnInit } from "@angular/core";
import { ProfileCrudService } from "../../../profile/services/profile-crud.service";
import { DeveloperDisplayService } from "../../services/developer-display.service";

@Component({
  selector: "app-profiles",
  templateUrl: "./profiles.component.html",
  styleUrls: ["./profiles.component.css"],
})
export class ProfilesComponent implements OnInit {
  profiles: any[];
  constructor(private devDisSer: DeveloperDisplayService) {}

  ngOnInit() {
    this.devDisSer.getAllProfiles().subscribe(
      (data) => {
        console.log(data);
        this.profiles = data;
      },
      (err) => {}
    );
  }
}
