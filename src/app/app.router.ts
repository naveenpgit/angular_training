import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

export const router: Routes = [
  {
    path: "dashboard",
    loadChildren: "app/dashboard/dashboard.module#DashboardModule",
  },
  {
    path: "auth",
    loadChildren: "app/auth/auth.module#AuthModule",
  },
  {
    path: "profiles",
    loadChildren: "app/profile/profile.module#ProfileModule",
  },
];

export const appRouter: ModuleWithProviders = RouterModule.forRoot(router);
