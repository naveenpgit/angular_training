import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProfilesComponent } from "./components/profiles/profiles.component";

const routes: Routes = [
  {
    path: "",
    component: ProfilesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DisplayDevelopersRoutingModule {}
