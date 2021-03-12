import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-profile-top",
  templateUrl: "./profile-top.component.html",
  styleUrls: ["./profile-top.component.css"],
})
export class ProfileTopComponent implements OnInit {
  @Input()
  topData: any = {};
  constructor() {}

  ngOnInit() {}
}
