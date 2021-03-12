import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CreateProfileComponent } from "./components/create-profile/create-profile.component";

const routes: Routes = [
  {
    path: "create-profile",
    component: CreateProfileComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}
