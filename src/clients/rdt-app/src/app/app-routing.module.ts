import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { DashboardGuard, LoginGuard } from "./_core/guards/auth-guards";
import { RouteNames } from "./_core/routes/routes";

const routes: Routes = [
  {
    path: "",
    redirectTo: RouteNames.public,
    pathMatch: "full"
  },
  {
    path: RouteNames.public,
    loadChildren: () => import("./pages/public/public.module").then(m => m.PublicModule),
    canActivate: [LoginGuard]
  },
  {
    path: RouteNames.access,
    loadChildren: () => import("./pages/access/access.module").then(m => m.AccessModule),
    canActivate: [LoginGuard]
  },
  {
    path: RouteNames.dashboard,
    loadChildren: () => import("./pages/dashboard/dashboard.module").then(m => m.DashboardModule),
    canActivate: [DashboardGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
