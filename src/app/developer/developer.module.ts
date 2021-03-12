import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DeveloperRoutingModule } from "./developer-routing.module";
import { ProfileComponent } from "./components/profile/profile.component";
import { ProfileTopComponent } from "./components/profile-top/profile-top.component";
import { ProfileGitComponent } from "./components/profile-git/profile-git.component";
import { ProfileExperienceComponent } from "./components/profile-experience/profile-experience.component";
import { ProfileEducationComponent } from "./components/profile-education/profile-education.component";
import { ProfileAboutComponent } from "./components/profile-about/profile-about.component";
import { DeveloperService } from "./services/developer.service";

@NgModule({
  imports: [CommonModule, DeveloperRoutingModule],
  declarations: [
    ProfileComponent,
    ProfileTopComponent,
    ProfileGitComponent,
    ProfileExperienceComponent,
    ProfileEducationComponent,
    ProfileAboutComponent,
  ],
  providers: [DeveloperService],
})
export class DeveloperModule {}
