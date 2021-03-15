import { Component, OnInit } from "@angular/core";
import { SharedService } from "../../../services/shared.service";
import { share } from "rxjs/operator/share";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  data: string = "";
  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.sharedService.subject.subscribe((data) => {
      this.data = data;
    });
  }
}
