import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AllProfilesComponent } from "./components/all-profiles/all-profiles.component";
import { ProfileFormComponent } from "./components/profile-form/profile-form.component";
import { ExperienceFormComponent } from "./components/experience-form/experience-form.component";
import { EducationFormComponent } from "./components/education-form/education-form.component";

const routes: Routes = [
  {
    path: "",
    component: AllProfilesComponent,
  },
  {
    path: "create-profile",
    component: ProfileFormComponent,
  },
  {
    path: "edit-profile",
    component: ProfileFormComponent,
  },
  {
    path: "add-experience",
    component: ExperienceFormComponent,
  },
  {
    path: "add-education",
    component: EducationFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilesRoutingModule {}
