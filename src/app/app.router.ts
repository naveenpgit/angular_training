import { AuthGuards } from "./core/guards/auth.guards";
import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

export const router: Routes = [
  {
    path: "dashboard",
    loadChildren: "app/dashboard/dashboard.module#DashboardModule",
    canActivate: [AuthGuards],
  },
  {
    path: "auth",
    loadChildren: "app/auth/auth.module#AuthModule",
  },
  {
    path: "profiles",
    loadChildren: "app/profile/profile.module#ProfileModule",
    canActivate: [AuthGuards],
  },
  {
    path: "display-developers",
    loadChildren:
      "app/display-developers/display-developers.module#DisplayDevelopersModule",
    canActivate: [AuthGuards],
  },
  {
    path: "developer",
    loadChildren: "app/developer/developer.module#DeveloperModule",
    canActivate: [AuthGuards],
  },
];

export const appRouter: ModuleWithProviders = RouterModule.forRoot(router);
