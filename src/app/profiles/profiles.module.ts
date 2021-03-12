import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ProfilesRoutingModule } from "./profiles-routing.module";
import { ProfileFormComponent } from "./components/profile-form/profile-form.component";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { ProfileCrudService } from "./services/profile-crud.service";
import { httpInterceptors } from "../core/interceptors";
import { AllProfilesComponent } from "./components/all-profiles/all-profiles.component";
import { ProfileCardComponent } from "./components/profile-card/profile-card.component";
import { EducationFormComponent } from "./components/education-form/education-form.component";
import { ExperienceFormComponent } from "./components/experience-form/experience-form.component";

@NgModule({
  declarations: [
    ProfileFormComponent,
    EducationFormComponent,
    ExperienceFormComponent,
    AllProfilesComponent,
    ProfileCardComponent,
  ],
  providers: [ProfileCrudService, httpInterceptors],
  imports: [CommonModule, ProfilesRoutingModule, FormsModule, HttpClientModule],
})
export class ProfilesModule {}
