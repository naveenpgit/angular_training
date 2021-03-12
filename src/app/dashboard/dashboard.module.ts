import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DashboardRoutingModule } from "./dashboard-routing.module";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { DashboardActionsComponent } from "./components/dashboard-actions/dashboard-actions.component";
import { EducationComponent } from "./components/education/education.component";
import { ExperienceComponent } from "./components/experience/experience.component";
import { httpInterceptors } from "../core/interceptors";
import { ProfileCrudService } from "../profiles/services/profile-crud.service";

@NgModule({
  imports: [CommonModule, DashboardRoutingModule],
  declarations: [
    DashboardComponent,
    DashboardActionsComponent,
    EducationComponent,
    ExperienceComponent,
  ],
  providers: [httpInterceptors, ProfileCrudService],
})
export class DashboardModule {}
