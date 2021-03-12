import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DashboardRoutingModule } from "./dashboard-routing.module";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { DashboardActionsComponent } from "./components/dashboard-actions/dashboard-actions.component";
import { EducationComponent } from "./components/education/education.component";
import { ExperienceComponent } from "./components/experience/experience.component";
import { HttpClient } from "@angular/common/http";
import { ProfileCrudService } from "../profile/services/profile-crud.service";

@NgModule({
  imports: [CommonModule, DashboardRoutingModule],
  declarations: [
    DashboardComponent,
    DashboardActionsComponent,
    EducationComponent,
    ExperienceComponent,
  ],
  providers: [HttpClient, ProfileCrudService],
})
export class DashboardModule {}
