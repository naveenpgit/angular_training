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
];

export const appRouter: ModuleWithProviders = RouterModule.forRoot(router);
