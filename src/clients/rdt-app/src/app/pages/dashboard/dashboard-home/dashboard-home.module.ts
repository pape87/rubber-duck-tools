import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DashboardHomeComponent } from "./dashboard-home.component";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [{
  path: "",
  component: DashboardHomeComponent
}];

@NgModule({
  declarations: [
    DashboardHomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class DashboardHomeModule { }
