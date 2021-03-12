import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ProfileRoutingModule } from "./profile-routing.module";
import { ProfileAboutComponent } from "./components/profile-about/profile-about.component";
import { ProfileGithubComponent } from "./components/profile-github/profile-github.component";
import { CreateProfileComponent } from "./components/create-profile/create-profile.component";
import { FormsModule } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { ProfileCrudService } from "./services/profile-crud.service";
import { EducationFormComponent } from "./components/education-form/education-form.component";
import { ExperienceFormComponent } from "./components/experience-form/experience-form.component";

@NgModule({
  imports: [CommonModule, FormsModule, ProfileRoutingModule],
  declarations: [
    ProfileAboutComponent,
    ProfileGithubComponent,
    CreateProfileComponent,
    EducationFormComponent,
    ExperienceFormComponent,
  ],
  providers: [HttpClient, ProfileCrudService],
})
export class ProfileModule {}
