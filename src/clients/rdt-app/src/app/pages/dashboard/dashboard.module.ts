import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";


import { RouteNames } from "../../_core/routes/routes";
import { MainComponent } from "./dashboard-container/main.component";
import { UserModule } from "src/app/components/user/user.module";

const routes: Routes = [
  {
    path: "",
    component: MainComponent,
    children: [
      {
        path: "",
        redirectTo: RouteNames.dhome,
        pathMatch: "full"
      },
      {
        path: RouteNames.dhome,
        loadChildren: () => import("./dashboard-home/dashboard-home.module").then(m => m.DashboardHomeModule),
      },
      {
        path: RouteNames.dhome2,
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
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    RouterModule.forChild(routes),
    UserModule
  ],
  exports: [
    RouterModule
  ]
})
export class DashboardModule { }

