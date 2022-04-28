import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { RouteNames } from "src/app/_core/routes/routes";

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        redirectTo: RouteNames.user,
        pathMatch: "full"
      },
      {
        path: RouteNames.user,
        loadChildren: () => import("./profile/profile.module").then(m => m.ProfileModule),
      }
    ],
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class UserModule { }
