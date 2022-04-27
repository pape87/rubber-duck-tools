import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatToolbarModule } from "@angular/material/toolbar";
import { RouterModule, Routes } from "@angular/router";

import { RouteNames } from "../../_core/routes/routes";
import { MainComponent } from "./dashboard-container/main.component";

const routes: Routes = [
  {
    path: "",
    component: MainComponent,
    children: [
      {
        path: "",
        redirectTo: RouteNames.dashboard,
        pathMatch: "full"
      },
      {
        path: RouteNames.dashboard,
        loadChildren: () => import("./dashboard-home/dashboard-home.module").then(m => m.DashboardHomeModule),
      }
    ],
  }
];

@NgModule({
  declarations: [
    MainComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class DashboardModule { }
