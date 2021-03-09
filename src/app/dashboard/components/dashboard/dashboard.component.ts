import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit {
  name: String = JSON.parse(localStorage.getItem("userDetails")).name;
  constructor() {}

  ngOnInit() {}
}
