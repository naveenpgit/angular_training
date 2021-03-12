import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CreateProfileComponent } from "./components/create-profile/create-profile.component";
import { EducationFormComponent } from "./components/education-form/education-form.component";
import { ExperienceFormComponent } from "./components/experience-form/experience-form.component";

const routes: Routes = [
  {
    path: "create-profile",
    component: CreateProfileComponent,
  },

  {
    path: "add-education",
    component: EducationFormComponent,
  },
  {
    path: "add-experience",
    component: ExperienceFormComponent,
  },
  {
    path: "edit-profile",
    component: ExperienceFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}
